$(document).ready(function () {

    const priceInputs = document.querySelectorAll(".price-input input");
    const rangeInputs = document.querySelectorAll(".range-input input");
    const range = document.querySelector(".slider .progress");

    let priceGap = 1000;

    priceInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInputs[0].value);
            let maxPrice = parseInt(priceInputs[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
                if (e.target.className === "min-input") {
                    rangeInputs[0].value = minPrice;
                    range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
                } else {
                    rangeInputs[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInputs.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "min-range") {
                    rangeInputs[0].value = maxVal - priceGap;
                } else {
                    rangeInputs[1].value = minVal + priceGap;
                }
            } else {
                priceInputs[0].value = minVal;
                priceInputs[1].value = maxVal;
                range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
        });
    });

    $('#year').text(new Date().getFullYear());

    $('.services').hover(
        function() {
            // Mouse enters the .services-link element
            $('.do-link, .working-link, .experience-link').css('display', 'inline-flex');
        },
        function() {
            // Mouse leaves the .services-link element
            $('.do-link, .working-link, .experience-link').css('display', 'none');
        }
    );

    // Toggle sidebar and content shift
    $('#burger').click(function () {
        $('#sidebar').toggleClass('open');
        $('.content').toggleClass('content-shift'); // Adjust content
    });

    // Close sidebar and reset content position
    $('div.close').click(function () {
        $('#sidebar').removeClass('open');
        $('.content').removeClass('content-shift'); // Reset content position
    });

 /*   // Dropdown toggle with event propagation prevention
    $('.dropdown-btn').click(function (e) {
        e.stopPropagation(); // Stop click from bubbling
        $('.dropdown-container').toggle();
        $(this).toggleClass('open');
    });*/

    //add active class to btn
    function handleButtonClick($group) {
        $group.find('button').on('click', function () {
            $group.find('button').removeClass('btn-active');
            $(this).addClass('btn-active');
        });
    }

    //call the function for each group
    handleButtonClick($('.products-nav-item'));
    handleButtonClick($('.use-nav-item'));
    handleButtonClick($('.model-nav-item'));
    handleButtonClick($('.methodology-nav-item'));
    handleButtonClick($('.product-nav-item'));


    $('#app, #web, #software').click(function () {
        //hide all product descriptions
        $('.app-product-desc, .web-product-desc, .software-product-desc').hide();

        //determine which product description to show based on the clicked element's ID
        switch (this.id) {
            case 'app':
                $('.app-product-desc').show();
                break;
            case 'web':
                $('.web-product-desc').show();
                break;
            case 'software':
                $('.software-product-desc').show();
                break;
        }
    });

    $('#outsource, #outstaff').click(function () {
        //hide all product descriptions
        $('.outsource-model-desc, .outstaff-model-desc').hide();

        //determine which product description to show based on the clicked element's ID
        switch (this.id) {
            case 'outsource':
                $('.outsource-model-desc').show();
                break;
            case 'outstaff':
                $('.outstaff-model-desc').show();
                break;
        }
    });

    $('#fixed, #tm, #retainer, #hybrid').click(function () {
        //hide all product descriptions
        $('.fixed-product-desc, .tm-product-desc, .retainer-product-desc, .hybrid-product-desc').hide();

        //determine which product description to show based on the clicked element's ID
        switch (this.id) {
            case 'fixed':
                $('.fixed-product-desc').show();
                break;
            case 'tm':
                $('.tm-product-desc').show();
                break;
            case 'retainer':
                $('.retainer-product-desc').show();
                break;
            case 'hybrid':
                $('.hybrid-product-desc').show();
                break;
        }
    });

    $('#scrum, #kanban, #incremental, #waterfall').click(function () {
        //hide all product descriptions
        $('.scrum-methodology-desc, .kanban-methodology-desc, .incremental-methodology-desc, .waterfall-methodology-desc').hide();

        //determine which product description to show based on the clicked element's ID
        switch (this.id) {
            case 'scrum':
                $('.scrum-methodology-desc').show();
                break;
            case 'kanban':
                $('.kanban-methodology-desc').show();
                break;
            case 'incremental':
                $('.incremental-methodology-desc').show();
                break;
            case 'waterfall':
                $('.waterfall-methodology-desc').show();
                break;
        }
    });

    //bind a click event handler to all buttons
    $('#fe, #be, #design').click(function () {
        //hide all descriptions initially
        $('.design-use-desc, .front-end-use-desc, .back-end-use-desc, .skills-desc').hide();

        //determine the prefix based on the clicked element's ID
        let prefix = '';
        switch (this.id) {
            case 'fe':
                prefix = 'front-end';
                break;
            case 'be':
                prefix = 'back-end';
                break;
            case 'design':
                prefix = 'design';
                break;
        }

        //show the relevant descriptions based on the prefix
        $('.' + prefix + '-use-desc').show();
        $('.' + prefix + '-skills-desc').css('display', 'initial');
    });

       //do, working, experience navigation
    $('.nav-item').on('click', function() {
        //navigation items activation
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        //page display logic
        let targetPage = $(this).data('target'); //get the target page from the clicked item
        $('.page').hide(); //hide all pages
        $(targetPage).show(); //show the targeted page
    });


    // Изначально скрыть весь контент, кроме первого (например, 'do')
    $('.page').hide();
    $('.do-page').show();
    $('#nav-item').addClass('active'); // Делаем ссылку на 'DO' активной по умолчанию

    // Обработчик клика по элементам сайдбара
    $('.sidebar-link').click(function(e) {
        e.preventDefault();
        // Получаем идентификатор нужного блока контента
        let contentId = $(this).data('content');
        let pageLinkId = '#nav-' + contentId.split('-')[0]; // Преобразуем ID контента в ID ссылки страницы

        // Скрываем текущий контент и отображаем новый
        $('.page').hide();
        $('#' + contentId).show();

        // Удаляем класс 'active' у всех ссылок на странице и добавляем его к соответствующей
        $('.nav-item').removeClass('active');
        $(pageLinkId).addClass('active');
    });

    // Check if the 'cookiesAccepted' flag is set in localStorage
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        // If the flag is set, hide the cookie banner
        $('.cookie-banner').hide();
    } else {
        // Otherwise, show the cookie banner
        $('.cookie-banner').show();
    }

    // When the user clicks the accept button, set the flag in localStorage and hide the banner
    $('.accept-btn').click(function() {
        localStorage.setItem('cookiesAccepted', 'true'); // Set the flag
        $('.cookie-banner').hide(); // Hide the banner
    });


    // When a file is selected
    $('#file').on('change', function() {
        // Get the file name
        let fileName = $(this).val().split('\\').pop();
        // Truncate the file name if it's too long
        let maxLength = 20; // Maximum number of characters to display
        let displayFileName = fileName.length > maxLength ? fileName.substring(0, maxLength) + '...' : fileName;

        // Hide the file format tip
        $('#file-format-tip').hide();
        // Show the file name display div and set the truncated file name
        $('#file-name-display').css('display', 'flex').find('.file-name span').text(displayFileName);
    });

    // When the cancel 'X' is clicked
    $('.cancel-file').on('click', function() {
        // Clear the file input
        $('#file').val('');
        // Hide the file name display div
        $('#file-name-display').hide();
        // Show the file format tip again
        $('#file-format-tip').show();
    });

    $('#okButton').click(function() {
        $('#submitModal').hide(); // Hide the modal
        $('.lets-talk')[0].reset(); // Reset the form
    });

    //validation
    $('#submit').click(function () {
        let name = $('#name');
        let phone = $('#phone');
        let email = $('#email');
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let hasError = false;

        name.css('border-color', 'rgba(150, 150, 150, 1)');
        phone.css('border-color', 'rgba(150, 150, 150, 1)');
        email.css('border-color', 'rgba(150, 150, 150, 1)');
        $('.error-input').hide();

        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'black');
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'black');
            hasError = true;
        }
        if (!email.val()) {
            email.next().show();
            email.css('border-color', 'black');
            hasError = true;
        }
      /*  if(!emailRegex.test(email)) { // Use the regex to test the email value
            email.next().show();
            email.css('border-color', 'black');
            hasError = true;
        }*/

        if (!hasError) {
            $.ajax({
                method: 'POST',
                url: "",
                data: {name: name.val(), phone: phone.val(), email: email.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('#submitModal').show();
                    } else {
                        //message
                    }
                });
        }
    })
})