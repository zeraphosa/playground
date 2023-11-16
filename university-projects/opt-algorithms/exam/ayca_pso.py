# amaç fonksiyonu formülü 100*(x2-x1**2)**2+(x1-1)**2+100*(x3-x2**2)**2+(x2-1)**2
import numpy as np

population = 30
dimension = 3
w = 0.8
c1 = 2
c2 = 2
r1 = np.random.uniform(0, 1)
r2 = np.random.uniform(0, 1)
pos_min = -100
pos_max = 100

swarm = np.random.uniform(pos_min, pos_max, (population, dimension))

def obj_func():
    obj_list = np.zeros((population, 1))
    for i in range(swarm.shape[0]):
        obj_list[i] = 100 * (swarm[i, 1]-swarm[i, 0]**2)**2 + (swarm[i, 0]-1)**2 + \
            100*(swarm[i, 2]-swarm[i, 1]**2)**2 + (swarm[i, 1]-1)**2
    return obj_list
obj_list = obj_func()

def gbest_func():
    result = swarm[np.argmin(obj_list)]
    return result
gbest = gbest_func()

def velocity_update():
    pbest_val = obj_list
    pbest_pos = swarm
    velocity = np.zeros((population, dimension))
    for i in range(swarm.shape[0]):
        velocity[i] = w*velocity[i] + c1*r1 * \
            (pbest_pos[i] - swarm[i]) + c2*r2*(gbest-swarm[i])
    # vmax olayi ve devami ----
    vmax = (pos_max - pos_min) / 2
    for i in range(population):
        for j in range(dimension):
            if (velocity[i, j] > vmax):
                velocity[i, j] = vmax
            elif (velocity[i, j] < -vmax):
                velocity[i, j] = -vmax
    return velocity
velocity = velocity_update()

def position_update():
    new_swarm = swarm + velocity
    return new_swarm
new_swarm = position_update()

print("swarm:\n", swarm, "\nobj_list:\n", obj_list,
      "\ngbest:\n", gbest, "\nvelocity:\n", velocity, "\nnew_swarm:\n", new_swarm)

# ikinci iterasyon amac fonksiyonu
# for i in range(swarm_2.shape[0]):
#     obj_dizi[i] = swarm_2[i, 0]**2 + swarm_2[i, 1]**2 + \
#         swarm_2[i, 2]**2 + swarm_2[i, 3]**2 + swarm_2[i, 4]**2

# for i in range(swarm_2.shape[0]):
#     if(obj_dizi[i] < pbest_val[i]):
#         pbest_val[i] = obj_dizi[i]
#         pbest_pos[i] = swarm_2[i]


# a_sinir (alt sinir), u_sinir (ust sinir), d (problemin boyutu)
# ssize (suru_buyuklugu), swarm (suru), obj_dizi (amac fonksiyonu)
# velocity (hiz vektoru), w (eylemsizlik katsayisi)
# c1 (bilissel parcacigin en iyi katsayisi), c2 (surunun en iyi katsayisi)