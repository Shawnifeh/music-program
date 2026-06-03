#include "raylib.h"

int main(void)
{
    const int screenWidth = 1200;
    const int screenHeight = 700;

    InitWindow(screenWidth, screenHeight, "Cloud Music");

    SetTargetFPS(60);

    while (!WindowShouldClose())
    {
        BeginDrawing();

        // Background
        ClearBackground((Color){18, 18, 18, 255});

        // Sidebar
        DrawRectangle(0, 0, 250, screenHeight, (Color){10, 10, 10, 255});

        // Top bar
        DrawRectangle(250, 0, screenWidth - 250, 80, (Color){30, 30, 30, 255});

        // Logo
        DrawText("CLOUD MUSIC", 40, 40, 30, GREEN);

        // Menu items
        DrawText("Home", 40, 120, 24, WHITE);
        DrawText("Library", 40, 170, 24, WHITE);
        DrawText("Playlists", 40, 220, 24, WHITE);

        // Fake music cards
        DrawRectangle(300, 120, 220, 120, (Color){40, 40, 40, 255});
        DrawRectangle(560, 120, 220, 120, (Color){40, 40, 40, 255});
        DrawRectangle(820, 120, 220, 120, (Color){40, 40, 40, 255});

        // Song titles
        DrawText("Game Theme", 330, 160, 22, GREEN);
        DrawText("Battle Music", 580, 160, 22, GREEN);
        DrawText("Menu Theme", 850, 160, 22, GREEN);

        // Bottom player bar
        DrawRectangle(250, 620, screenWidth - 250, 80, (Color){25, 25, 25, 255});

        DrawText("Now Playing: Game Theme", 300, 650, 22, WHITE);

        // Fake play button
        DrawCircle(1050, 660, 25, GREEN);
        DrawText(">", 1043, 648, 28, BLACK);

        EndDrawing();
    }

    CloseWindow();

    return 0;
}