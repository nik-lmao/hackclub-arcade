from pytube import YouTube
from youtubesearchpython import VideosSearch
import os

def download_song(url):
    save_path = "./sounds"
    if not os.path.exists(save_path):
        os.makedirs(save_path)

    print(f"Downloading song...")
    try:
        video = YouTube(url)

        stream = video.streams.filter(only_audio=True).first()

        stream.download(output_path=save_path)
        print(f"Downloaded {video.title} successfully!")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

message = """
Welcome to the YouTube Downloader!
With this tool you can download any song/sound from YouTube.
It's handy to use when trying to download multiple sounds, you just enter the URL and the song will be downloaded without any further input.

To exit the program don't type anything and just press enter.
"""

print(message)
while True:
    os.system('cls' if os.name == 'nt' else 'clear')
    search = input("Enter the song or URL you want to download: ")
    if search == "":
        break
    if "youtube.com" in search:
        download_song(search)
        print("Song downloaded successfully!")
        continue
    search = VideosSearch(search, limit=1)
    url = search.result()['result'][0]['link']
    download_song(url)
    print("Song downloaded successfully!")