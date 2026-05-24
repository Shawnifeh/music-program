import sys
import requests
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import (
    QApplication, QWidget, QVBoxLayout,
    QLineEdit, QPushButton, QListWidget, QLabel
)

BASE_URL = "http://127.0.0.1:5000"


class MusicApp(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Music App")
        self.setWindowIcon(QIcon("app_icon.ico"))
        self.setGeometry(300, 150, 450, 600)

        # Layout
        layout = QVBoxLayout()

        # Title
        self.title = QLabel("My Music App")
        self.title.setStyleSheet("font-size: 18px; font-weight: bold;")
        layout.addWidget(self.title)

        # Search box
        self.search_box = QLineEdit()
        self.search_box.setPlaceholderText("Search songs...")
        layout.addWidget(self.search_box)

        # Button
        self.search_btn = QPushButton("Search")
        self.search_btn.clicked.connect(self.search_songs)
        layout.addWidget(self.search_btn)

        # Song list
        self.list_widget = QListWidget()
        layout.addWidget(self.list_widget)

        self.setLayout(layout)

    def search_songs(self):
        query = self.search_box.text().strip()

        if not query:
            return

        try:
            res = requests.get(f"{BASE_URL}/search?q={query}")
            data = res.json()

            self.list_widget.clear()

            for song in data:
                self.list_widget.addItem("🎵 " + song["name"])

        except Exception as e:
            self.list_widget.clear()
            self.list_widget.addItem(f"Error: {e}")


# Run app
app = QApplication(sys.argv)
window = MusicApp()
window.show()
sys.exit(app.exec())