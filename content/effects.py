import os
import json

folderPath = "audioEffects"

files = os.listdir(folderPath)

data = {"count": len(files), "effects": {}}

for i, v in enumerate(files):
    data["effects"].update({f"{i}": f"{folderPath}/{v}"})

with open('effects.json', 'w') as outfile:
    json.dump(data, outfile)
