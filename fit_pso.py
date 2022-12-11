# f(x1,x2)=(x1+2*-x2+3)^2 + (2*x1+x2-8)^2
# swarm, hiz, gbest, pos, iter
import numpy as np

population = 100
dimension = 2
position_min = -100.0
position_max = 100.0
generation = 400
fitness_criterion = 10e-4
r1 = np.random.uniform(0,1)
r2 = np.random.uniform(0,1)
w = np.random.uniform(0.5,1)
c1 = 0.1
c2 = 0.1

def fitness_func(x1,x2):
    f1 = x1+2*-x2+3
    f2 = 2*x1+x2-8
    z = f1**2 + f2**2
    return z

def velocity_update(particle,gbest,pbest,velocity):
    num_particle = len(particle)
    new_velocity = np.array([0.0 for i in range(num_particle)])
    for i in range(num_particle):
        new_velocity[i] = w*velocity[i] + c1*r1*(pbest[i] - particle[i]) + c2*r2*(gbest[i] - particle[i])
    return new_velocity

def position_update(particle,velocity):
    new_particle = particle + velocity
    return new_particle

particles = np.random.uniform(position_min, position_max, (population,dimension))

pbest_pos = particles
pbest_fitness = [fitness_func(p[0],p[1]) for p in particles]

gbest_index = np.argmin(pbest_fitness)
gbest_pos = pbest_pos[gbest_index]
velocity = [[0.0 for j in range(dimension)] for i in range(population)]

for t in range(generation):
    if np.average(pbest_fitness) <= fitness_criterion:
        break
    else:
        for n in range(population):
            velocity[n] = velocity_update(particles[n],velocity[n],pbest_pos[n],gbest_pos)
            particles[n] = position_update(particles[n],velocity[n])

    pbest_fitness = [fitness_func(p[0],p[1]) for p in particles]
    gbest_index = np.argmin(pbest_fitness)
    gbest_pos = pbest_pos[gbest_index]

print("gbest:",gbest_pos)
print("pbest_fitness:",min(pbest_fitness))
print("generation number:",t)