CREATE DATABASE art_community;


--get extension: CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE post(
    post_id SERIAL,
    user_id UUID,
    description VARCHAR NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

