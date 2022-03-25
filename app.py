# from stl import mesh
# import numpy as np

# cuboid = mesh.Mesh.from_file("./chs70(3).stl")
# points = np.around(np.unique(cuboid.vectors.reshape([int(cuboid.vectors.size/3), 3]), axis=0),2)
# # print ("Points are", )
# poi=points.tolist()
# print(set(poi))
# print(type(points))
# print(len(points))

# create an empty list
l = [1,2,3,4]

# create a dictionary with student details
student = {7058:'sravan kumsr Gottumukkala',
		7059:'ojaswi',7060:'bobby',
		7061:'gnanesh',7062:'rohith'}

# append this dictionary to the
# empty list using copy() method
l.append(student.copy())

# display list
print(l)
