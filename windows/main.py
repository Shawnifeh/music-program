import sys
import requests
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import (
    QApplication, QWidget, QHBoxLayout, QVBoxLayout,
    QPushButton, QListWidget, QLineEdit, QLabel
)
from PyQt6.QtGui import QFont

BASE_URL = "http://127.0.0.1:5000"


class MusicApp(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Music Program")
        self.setWindowIcon(QIcon("app_icon.ico"))
        self.showMaximized()

        # MAIN LAYOUT (horizontal like Spotify)
        main_layout = QHBoxLayout()

        # ---------------- LEFT SIDEBAR ----------------
        sidebar = QVBoxLayout()

        title = QLabel("🎧 Music")
        title.setFont(QFont("Arial", 18))
        sidebar.addWidget(title)

        home_btn = QPushButton("Home")
        search_btn = QPushButton("Search")
        liked_btn = QPushButton("Liked")

        sidebar.addWidget(home_btn)
        sidebar.addWidget(search_btn)
        sidebar.addWidget(liked_btn)

        sidebar.addStretch()

        # ---------------- RIGHT CONTENT ----------------
        content = QVBoxLayout()

        self.search_box = QLineEdit()
        self.search_box.setPlaceholderText("Search songs...")
        content.addWidget(self.search_box)

        self.search_btn = QPushButton("Search")
        self.search_btn.clicked.connect(self.search_songs)
        content.addWidget(self.search_btn)

        self.song_list = QListWidget()
        content.addWidget(self.song_list)

        # ADD BOTH SIDES
        main_layout.addLayout(sidebar, 1)
        main_layout.addLayout(content, 4)

        self.setLayout(main_layout)

    def search_songs(self):
        query = self.search_box.text()

        res = requests.get(f"{BASE_URL}/search?q={query}")
        data = res.json()

        self.song_list.clear()

        for song in data:
            self.song_list.addItem("🎵 " + song["name"])


app = QApplication(sys.argv)
window = MusicApp()
window.show()
sys.exit(app.exec())