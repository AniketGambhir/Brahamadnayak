/* =========================================
   BRAHAMADNAYAK WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const WHATSAPP_NUMBER = "919075439504";


/* =========================================
   SERVICES
========================================= */

const services = [

    {
        icon: "🧺",
        en: "Washing Machine",
        mr: "वॉशिंग मशीन",
        hi: "वॉशिंग मशीन"
    },

    {
        icon: "💧",
        en: "Water Filter / Purifier",
        mr: "वॉटर फिल्टर / प्युरिफायर",
        hi: "वॉटर फिल्टर / प्युरिफायर"
    },

    {
        icon: "🔥",
        en: "Geyser",
        mr: "गीझर",
        hi: "गीजर"
    },

    {
        icon: "❄️",
        en: "Water Cooler",
        mr: "वॉटर कूलर",
        hi: "वॉटर कूलर"
    },

    {
        icon: "🌀",
        en: "Fan Repairing",
        mr: "पंखा दुरुस्ती",
        hi: "पंखा रिपेयरिंग"
    },

    {
        icon: "⚡",
        en: "Home Wiring",
        mr: "घरातील वायरिंग",
        hi: "घर की वायरिंग"
    }

];


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    en: {

        home: "Home",

        services: "Services",

        booking: "Book Service",

        contact: "Contact",

        heroTitle:
            "Your Home, Our Responsibility",

        heroDescription:
            "Professional home repair and maintenance services at your doorstep.",

        bookNow:
            "Book a Service",

        callNow:
            "Call Now",

        servicesTitle:
            "Professional Home Services",

        bookingTitle:
            "Need a Home Service?",

        bookingDescription:
            "Fill the form and send your service request directly to us on WhatsApp.",

        nameLabel:
            "Your Name",

        addressLabel:
            "Home Address",

        mobileLabel:
            "Mobile Number",

        serviceLabel:
            "Select Service",

        problemLabel:
            "Task / Problem",

        sendWhatsApp:
            "Send Request on WhatsApp",

        contactTitle:
            "Get In Touch",

        call:
            "Call Us",

        manager:
            "Service Manager"

    },


    mr: {

        home: "मुख्यपृष्ठ",

        services: "सेवा",

        booking: "सेवा बुक करा",

        contact: "संपर्क",

        heroTitle:
            "तुमचे घर, आमची जबाबदारी",

        heroDescription:
            "तुमच्या घरासाठी व्यावसायिक दुरुस्ती आणि देखभाल सेवा.",

        bookNow:
            "सेवा बुक करा",

        callNow:
            "आत्ता कॉल करा",

        servicesTitle:
            "आमच्या व्यावसायिक घरगुती सेवा",

        bookingTitle:
            "घरगुती सेवेची गरज आहे?",

        bookingDescription:
            "फॉर्म भरा आणि तुमची सेवा विनंती थेट WhatsApp वर पाठवा.",

        nameLabel:
            "तुमचे नाव",

        addressLabel:
            "घराचा पत्ता",

        mobileLabel:
            "मोबाईल नंबर",

        serviceLabel:
            "सेवा निवडा",

        problemLabel:
            "काम / समस्या",

        sendWhatsApp:
            "WhatsApp वर विनंती पाठवा",

        contactTitle:
            "आमच्याशी संपर्क करा",

        call:
            "कॉल करा",

        manager:
            "सेवा व्यवस्थापक"

    },


    hi: {

        home: "होम",

        services: "सेवाएं",

        booking: "सेवा बुक करें",

        contact: "संपर्क",

        heroTitle:
            "आपका घर, हमारी जिम्मेदारी",

        heroDescription:
            "आपके घर के लिए प्रोफेशनल रिपेयर और मेंटेनेंस सेवाएं.",

        bookNow:
            "सेवा बुक करें",

        callNow:
            "अभी कॉल करें",

        servicesTitle:
            "प्रोफेशनल होम सर्विस",

        bookingTitle:
            "क्या आपको होम सर्विस चाहिए?",

        bookingDescription:
            "फॉर्म भरें और अपनी सर्विस रिक्वेस्ट सीधे WhatsApp पर भेजें.",

        nameLabel:
            "आपका नाम",

        addressLabel:
            "घर का पता",

        mobileLabel:
            "मोबाइल नंबर",

        serviceLabel:
            "सेवा चुनें",

        problemLabel:
            "काम / समस्या",

        sendWhatsApp:
            "WhatsApp पर रिक्वेस्ट भेजें",

        contactTitle:
            "हमसे संपर्क करें",

        call:
            "कॉल करें",

        manager:
            "सेवा प्रबंधक"

    }

};


/* =========================================
   GET LANGUAGE
========================================= */

const urlParams =
    new URLSearchParams(window.location.search);

let currentLanguage =
    urlParams.get("lang") || "en";


if (!translations[currentLanguage]) {
    currentLanguage = "en";
}


/* =========================================
   APPLY TRANSLATION
========================================= */

function applyLanguage() {

    const language =
        translations[currentLanguage];

    document
        .querySelectorAll("[data-text]")
        .forEach(element => {

            const key =
                element.getAttribute("data-text");

            if (language[key]) {

                element.textContent =
                    language[key];

            }

        });

}


/* =========================================
   DISPLAY SERVICES
========================================= */

function displayServices() {

    const container =
        document.getElementById("servicesContainer");

    const select =
        document.getElementById("service");

    if (!container || !select) {
        return;
    }


    container.innerHTML = "";

    select.innerHTML = "";


    /* Default option */

    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent =
        currentLanguage === "mr"
            ? "सेवा निवडा"
            : currentLanguage === "hi"
                ? "सेवा चुनें"
                : "Select a service";

    select.appendChild(defaultOption);


    /* Services */

    services.forEach(service => {

        const name =
            service[currentLanguage];


        /* CARD */

        const card =
            document.createElement("div");

        card.className =
            "service-card";


        card.innerHTML = `

            <div class="service-icon">
                ${service.icon}
            </div>

            <h3>
                ${name}
            </h3>

            <p>
                ${getServiceDescription(service)}
            </p>

        `;


        container.appendChild(card);


        /* SELECT OPTION */

        const option =
            document.createElement("option");

        option.value =
            name;

        option.textContent =
            name;

        select.appendChild(option);

    });

}


/* =========================================
   SERVICE DESCRIPTION
========================================= */

function getServiceDescription(service) {

    if (currentLanguage === "mr") {

        return "व्यावसायिक आणि विश्वासार्ह सेवा तुमच्या घरपोच.";

    }

    if (currentLanguage === "hi") {

        return "आपके घर पर भरोसेमंद और प्रोफेशनल सर्विस.";

    }

    return "Professional and reliable service at your doorstep.";
}


/* =========================================
   FORM SUBMISSION
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                .getElementById("name")
                .value.trim();


            const address =
                document
                .getElementById("address")
                .value.trim();


            const mobile =
                document
                .getElementById("mobile")
                .value.trim();


            const service =
                document
                .getElementById("service")
                .value;


            const problem =
                document
                .getElementById("problem")
                .value.trim();


            /* MOBILE VALIDATION */

            if (!/^[0-9]{10}$/.test(mobile)) {

                const message =
                    currentLanguage === "mr"
                        ? "कृपया 10 अंकी मोबाईल नंबर टाका."
                        : currentLanguage === "hi"
                            ? "कृपया 10 अंकों का मोबाइल नंबर दर्ज करें."
                            : "Please enter a valid 10-digit mobile number.";

                alert(message);

                return;
            }


            /* WHATSAPP MESSAGE */

            let whatsappMessage = "";


            if (currentLanguage === "mr") {

                whatsappMessage =
`नमस्कार Brahamadnayak,

मला घरगुती सेवेची आवश्यकता आहे.

नाव: ${name}

घराचा पत्ता: ${address}

मोबाईल नंबर: ${mobile}

सेवा: ${service}

काम / समस्या:
${problem}

कृपया माझ्याशी संपर्क साधा.

धन्यवाद.`;

            }

            else if (currentLanguage === "hi") {

                whatsappMessage =
`नमस्ते Brahamadnayak,

मुझे होम सर्विस की आवश्यकता है.

नाम: ${name}

घर का पता: ${address}

मोबाइल नंबर: ${mobile}

सेवा: ${service}

काम / समस्या:
${problem}

कृपया मुझसे संपर्क करें.

धन्यवाद.`;

            }

            else {

                whatsappMessage =
`Hello Brahamadnayak,

I need a home service.

Name: ${name}

Home Address: ${address}

Mobile Number: ${mobile}

Service: ${service}

Task / Problem:
${problem}

Please contact me.

Thank you.`;

            }


            /* WHATSAPP URL */

            const whatsappURL =
                `https://wa.me/${WHATSAPP_NUMBER}?text=` +
                encodeURIComponent(whatsappMessage);


            /* OPEN WHATSAPP */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    if (nav) {

        nav.classList.toggle("active");

    }

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                const nav =
                    document.getElementById("navMenu");

                if (nav) {

                    nav.classList.remove("active");

                }

            }
        );

    });


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.getElementById("cursorGlow");


if (cursorGlow) {

    document.addEventListener(
        "mousemove",
        function(event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );

}


/* =========================================
   START WEBSITE
========================================= */

applyLanguage();

displayServices();
