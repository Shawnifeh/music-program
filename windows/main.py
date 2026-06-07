import sys
import requests
from PyQt6.QtWidgets import QApplication, QWidget

from ui import build_ui
from song_page import SongPage  # make sure filename is correct

BASE_URL = "http://10.0.0.107:5000"


class MusicApp(QWidget):

    def __init__(self):
        super().__init__()

        self.setWindowTitle("Music Program")
        self.showMaximized()

        # build UI FIRST
        self.setLayout(build_ui(self))

        # now widgets exist
        self.song_list.itemClicked.connect(self.open_song)

        self.search_btn.clicked.connect(self.search_songs)

    def search_songs(self):
        query = self.search_box.text()


        res = requests.get(f"{BASE_URL}/search?q={query}")
        data = res.json()

        self.song_list.clear()

        for song in data:
            self.song_list.addItem("🎵 " + song["name"])

    def open_song(self, item):
        song_name = item.text().replace("🎵 ", "")

        res = requests.get(f"{BASE_URL}/search?q={song_name}")
        data = res.json()

        if data:
            song = data[0]

            self.song_page = SongPage(song, self.play_song)
            self.song_page.show()

    def play_song(self, song):
        print("Playing:", song["name"])


def load_style(app):
    with open("style.qss", "r") as f:
        app.setStyleSheet(f.read())


app = QApplication(sys.argv)

load_style(app)

window = MusicApp()
window.show()

sys.exit(app.exec())