document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const hiddenInput = document.getElementById('editorContent');
    const form = document.querySelector('form');

    // Загружаем сохраненное содержимое при запуске
    editor.innerHTML = hiddenInput.value;

    // Обработчики для кнопок форматирования
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const command = this.getAttribute('data-command');
            formatText(command);
        });
    });

    // Функция форматирования текста
    function formatText(command) {
        document.execCommand(command, false, null);
        editor.focus();
    }

    // Сохраняем содержимое редактора в скрытое поле
    function updateHiddenInput() {
        hiddenInput.value = editor.innerHTML;
    }

    // Обновляем скрытое поле при изменении редактора
    editor.addEventListener('input', updateHiddenInput);

    // Обновляем скрытое поле перед отправкой формы
    form.addEventListener('submit', function (e) {
        updateHiddenInput();

        // Для дебага - можно проверить содержимое перед отправкой
        console.log('Saving content:', hiddenInput.value);
    });

    /* Стили для формы */
.container {
        max - width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

/* Стили для кнопки сохранения */
.btn - primary {
        background - color: #0d6efd;
        padding: 8px 20px;
        font - size: 16px;
    }

/* Фикс для TinyMCE */
.tox - tinymce {
        border - radius: 4px;
        border: 1px solid #ced4da!important;
    }

/* Стили для заголовка */
.text - center {
        text - align: center;
    }

.mb - 4 {
        margin - bottom: 1.5rem;
    }

.mt - 3 {
        margin - top: 1rem;
    }

.mt - 4 {
        margin - top: 1.5rem;
    }
    }
});