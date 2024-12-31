import pickle

with open("app/train_model/variety_model.pkl", "rb") as file:
    variety_model = pickle.load(file)

print(type(variety_model))
