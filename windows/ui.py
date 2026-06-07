from PyQt6.QtWidgets import (
    QHBoxLayout, QVBoxLayout,
    QPushButton, QLineEdit,
    QListWidget, QLabel
)
from PyQt6.QtGui import QFont


def build_ui(window):
    main_layout = QHBoxLayout()

    # ================= LEFT SIDEBAR =================
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

    # ================= RIGHT CONTENT =================
    content = QVBoxLayout()

    # SEARCH BOX
    window.search_box = QLineEdit()
    window.search_box.setPlaceholderText("Search songs...")
    content.addWidget(window.search_box)

    # SEARCH BUTTON
    window.search_btn = QPushButton("Search")
    content.addWidget(window.search_btn)

    # SONG LIST
    window.song_list = QListWidget()
    content.addWidget(window.song_list)

    # ================= COMBINE =================
    main_layout.addLayout(sidebar, 1)
    main_layout.addLayout(content, 4)

    return main_layout