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
                message: "Email must be entered in form example@email.com",
            },
        },
    },
    {
        name: "phone",
        placeholder: "Phone (Optional)",
        rules: {
            required: false,
            pattern: {},
        },
    },
];

export default contactInputFields;
