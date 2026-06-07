from PyQt6.QtWidgets import (
    QWidget, QVBoxLayout, QLabel, QPushButton
)
from PyQt6.QtGui import QFont


class SongPage(QWidget):
    def __init__(self, song, play_callback):
        super().__init__()

        self.song = song
        self.play_callback = play_callback

        self.setWindowTitle("Now Playing")

        layout = QVBoxLayout()

        # SONG TITLE
        title = QLabel(song["name"])
        title.setFont(QFont("Arial", 20))
        layout.addWidget(title)

        # PLAY BUTTON (disk-style later)
        self.play_btn = QPushButton("▶ Play")
        self.play_btn.clicked.connect(self.play_song)
        layout.addWidget(self.play_btn)

        self.setLayout(layout)

    def play_song(self):
        self.play_callback(self.song)