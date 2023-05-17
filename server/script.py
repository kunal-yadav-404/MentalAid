import subprocess
import sys
import base64
import imageio.plugins.ffmpeg

imageio.plugins.ffmpeg.download()

# Run the pip install command to download and install the module
subprocess.check_call([sys.executable, "-m", "pip", "install", "fer"])
subprocess.check_call([sys.executable, "-m", "pip", "install", "tensorflowjs"])
subprocess.check_call([sys.executable, "-m", "pip", "install", "imageio"])

from fer import Video
from fer import FER
from io import BytesIO
import os
import sys
import pandas as pd
import os

print("hello working")


# Put in the location of the video file that has to be processed
location_videofile = os.getcwd()+"\\test.webm"

# Build the Face detection detector
face_detector = FER(mtcnn=True)
# Input the video for processing
input_video = Video(location_videofile)

# The analyze() function will run analysis on every frame of the input video. 
# It will create a rectangular box around every image and show the emotion values next to that.
# Finally, the method will publish a new video that will have a box around the face of the human with live emotion values.
processing_data = input_video.analyze(face_detector, display=False)

# We will now convert the analysed information into a dataframe.
# This will help us import the data as a .CSV file to perform analysis over it later
vid_df = input_video.to_pandas(processing_data)
vid_df = input_video.get_first_face(vid_df)
vid_df = input_video.get_emotions(vid_df)

# Plotting the emotions against time in the video
pltfig = vid_df.plot(figsize=(20, 8), fontsize=16).get_figure()

# We will now work on the dataframe to extract which emotion was prominent in the video
angry = sum(vid_df.angry)
disgust = sum(vid_df.disgust)
fear = sum(vid_df.fear)
happy = sum(vid_df.happy)
sad = sum(vid_df.sad)
surprise = sum(vid_df.surprise)
neutral = sum(vid_df.neutral)

emotions = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']
emotions_values = [angry, disgust, fear, happy, sad, surprise, neutral]

score_comparisons = pd.DataFrame(emotions, columns = ['Human Emotions'])
score_comparisons['Emotion Value from the Video'] = emotions_values
score_comparisons




# Save the figure to a BytesIO object
buffer = BytesIO()
pltfig.savefig(buffer, format='png')
buffer.seek(0)

# Encode the image data as base64
base64_data = base64.b64encode(buffer.getvalue())

# Convert the base64 data to a string
my_string = base64_data.decode('utf-8')

print(my_string)

    