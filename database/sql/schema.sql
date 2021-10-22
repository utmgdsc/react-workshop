CREATE TABLE todos (
    todoid SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description VARCHAR(100),
    isChecked BOOLEAN
);
