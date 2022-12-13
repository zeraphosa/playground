# 0.26(x1**2 + x2**2) - 0.48*x1*x2

import numpy as np
population = 100
dimension = 2
pos_min = -10.0
pos_max = 10.0
generation = 1000
fitness_criterian = 500
c1=0.1
c2=0.1
w = np.random.uniform(0.5,1)
r1 = np.random.uniform(0,1)
r2 = np.random.uniform(0,1)

def fitness_func(x1,x2):
    f1 = x1**2 + x2**2
    f2 = x1*x2
    z = 0.26*f1 - 0.48*f2
    return z

# hiz guncelleme
def update_velocity(particle, velocity, pbest, gbest):
    num_particle = len(particle)
    new_velocity = np.array([0.0 for i in range(num_particle)])
    for i in range(num_particle):
        new_velocity[i] = w*velocity[i] + c1*r1*(pbest[i] - particle[i]) + c2*r2*(gbest[i] - particle[i])
    return new_velocity

# konum guncelleme
def update_position(particle, velocity):
    new_particle = particle + velocity
    return new_particle

#parcacik, suru olusturma
particles = np.random.uniform(pos_min,pos_max, (population, dimension))

# ilk konumun kendisi olmasi
pbest_pos = particles
pbest_fitness = [fitness_func(p[0],p[1]) for p in particles]

gbest_index = np.argmin(pbest_fitness)
gbest_pos = pbest_pos[gbest_index]  

velocity = [[0.0 for j in range(dimension)] for i in range(population)]

for t in range(generation):
    if np.average(pbest_fitness) <= fitness_criterian:
        break
    else:
        for n in range(population):
            velocity[n] = update_velocity(particles(n),velocity[n],pbest_pos[n],gbest_pos)
            particles[n] = update_position(particles[n], velocity[n])
    pbest_fitness = [fitness_func(p[0],p[1]) for p in particles]
    gbest_index = np.argmin(pbest_fitness)
    gbest_pos = pbest_pos[gbest_index]
    
print("gbest_position:",gbest_pos)
print("pbest_fitness:",min(pbest_fitness))
print("t:",t)

# import matplotlib.pyplot as plt
# plt.plot(generation, pbest_fitness, color ="red") ?
