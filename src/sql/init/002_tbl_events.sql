CREATE TABLE card.events (
    id serial,
    event varchar,
    cardNumber varchar,
    insertedAt timestamp with time zone,
    ip varchar
)
