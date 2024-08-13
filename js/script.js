const menuItems = document.querySelectorAll('.header_menu_item');

    // Функція для видалення всіх активних класів
    const removeActiveClasses = () => {
        menuItems.forEach(item => {
            item.querySelector('.header_menu_item_front').classList.remove('active');
            item.querySelector('.header_menu_item_content').classList.remove('active');
            item.querySelector('.array').classList.remove('active');
        });
    };

    menuItems.forEach(item => {
        const front = item.querySelector('.header_menu_item_front');
        const array = item.querySelector('.array');
        const content = item.querySelector('.header_menu_item_content');

        front.addEventListener('click', (e) => {
            e.stopPropagation(); // Зупиняємо поширення події

            const isActive = front.classList.contains('active');

            // Якщо елемент вже активний, залишаємо його активним
            if (!isActive) {
                // Спочатку видаляємо всі активні класи
                removeActiveClasses();

                // Додаємо активні класи до натиснутого елементу
                front.classList.add('active');
                array.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Видалення активних класів при натисканні поза меню
    document.addEventListener('click', () => {
        removeActiveClasses();
    });


    const headerBurger = document.querySelector('.burger')
    const headerMenu = document.querySelector('.header_menu')
    
    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })