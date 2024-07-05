const contactInputFields = [
    {
        name: "firstName",
        placeholder: "First Name",
        rules: {
            required: "A valid first name is required.",
            maxLength: 20,
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: "First name must only contain alphabetical letters.",
            },
        },
    },
    {
        name: "lastName",
        placeholder: "Last Name",
        rules: {
            required: "A valid last name is required.",
            maxLength: 20,
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name must only contain alphabetical letters.",
            },
        },
    },
    {
        name: "email",
        placeholder: "Email",
        rules: {
            required: "A valid email is required.",
            pattern: {
                value: /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,63})$/,
                message: "Email must be entered in format: 'example@email.com'",
            },
        },
    },
    {
        name: "phone",
        placeholder: "Phone (Optional)",
        rules: {
            required: false,
            pattern: {
                value: /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}([-.\s]?\d{1,5})?$/,
                message:
                    "Phone number can only contain a maximum of 15 numerical values",
            },
        },
    },
    {
        name: "message",
        placeholder: "What would you like to say?",
        rules: {
            reqired: false,
            maxLength: 200,
        },
    },
];

export default contactInputFields;
