using System;
using System.IO;

namespace aspNet_kt2.Services
{
    public static class TextFileStorage
    {
        private static readonly string FilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", "savedText.html");

        static TextFileStorage()
        {
            // Создаем директорию App_Data, если ее нет
            var directory = Path.GetDirectoryName(FilePath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            // Создаем файл, если его нет
            if (!File.Exists(FilePath))
            {
                File.WriteAllText(FilePath, string.Empty);
            }
        }

        public static void SaveText(string text)
        {
            try
            {
                File.WriteAllText(FilePath, text);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving text: {ex.Message}");
                throw;
            }
        }

        public static string LoadText()
        {
            try
            {
                return File.ReadAllText(FilePath);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error loading text: {ex.Message}");
                return string.Empty;
            }
        }
    }
}