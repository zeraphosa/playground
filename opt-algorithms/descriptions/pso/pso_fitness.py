import random
import numpy as np

population = 100
dimension = 2
position_min = -100.0
position_max = 100.0
generation = 400
fitness_criterion = 10e-4

# Fitness function
# Amaç foksiyonu
# f(x1,x2)=(x1+2*-x2+3)^2 + (2*x1+x2-8)^2
# Bu fonksiyonu minimize edecek 2 boyutlu vektörü bulun.

def fitness_function(x1,x2):
  f1=x1+2*-x2+3
  f2=2*x1+x2-8
  z = f1**2+f2**2
  return z

def update_velocity(particle, velocity, pbest, gbest):
  # Hız vektörünü 0.0 float değerlerle dolduralım
  num_particle = len(particle)
  new_velocity = np.array([0.0 for i in range(num_particle)])
  # Ağırlık değerini ve katsayıları rastgele üretelim
  r1 = random.uniform(0,1)
  r2 = random.uniform(0,1)
  w = random.uniform(0.5,1)
  c1 = 0.1
  c2 = 0.1
  # Yeni hızın hesaplanması
  for i in range(num_particle):
    new_velocity[i] = w*velocity[i] + c1*r1*(pbest[i]-particle[i])+c2*r2*(gbest[i]-particle[i])
  return new_velocity


def update_position(particle, velocity):
  # Move particles by adding velocity
  new_particle = particle + velocity
  return new_particle


# sürünün oluşturulması
particles = np.random.uniform(position_min, position_max, (population,dimension))


# İlk aşamadan parçacıkların bulundukları yerler en iyi yerlerdir
pbest_position = particles
# Tüm fitness değerlerinin hesaplanması
pbest_fitness=[]
for p in particles:
    fitness=fitness_function(p[0],p[1])
    pbest_fitness.append(fitness)
    
# En iyi parçacığın indeksinin bulunması
gbest_index = np.argmin(pbest_fitness)

# En iyi parçacığın pozisyonunun bulunması
gbest_position = pbest_position[gbest_index]

# İlk hızı 0 alarak başlıyoruz.

velocity = [[0.0 for j in range(dimension)] for i in range(population)]

# Parçacıkların kaç iterasyon boyunca güncellendiği -> generation
for t in range(generation):
  # Eğer ortalama fitness değeri kriterden küçük olursa algoritmayı durdur
  if np.average(pbest_fitness) <= fitness_criterion:
    break
  else:
    for n in range(population):
      # Her parçacığın hızının güncellenmesi
      velocity[n] = update_velocity(particles[n], velocity[n],
                                    pbest_position[n],
                                    gbest_position)
      # Parçacığı yeni pozisyonuna hareket ettirin.
      particles[n] = update_position(particles[n], velocity[n])
      
      
  # Parçacıkların amaç fonksiyonlarının bulunması
  pbest_fitness = [fitness_function(p[0],p[1]) for p in particles]
  # En iyi parçacığın hangi indekste olduğunun bulunması
  gbest_index = np.argmin(pbest_fitness)
  # En iyi parçacığın pozisyonunun güncellenmesi
  gbest_position = pbest_position[gbest_index]

print('Global Best Position: ', gbest_position)
print('Best Fitness Value: ', min(pbest_fitness))
print('Number of Generation: ', t)