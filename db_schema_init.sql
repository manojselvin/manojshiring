CREATE TABLE candidates (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	phone varchar(20) NOT NULL,
	skills text NULL,
	status varchar(50) NOT NULL,
	expected_salary numeric(10, 2) NULL,
	node_experience numeric(5, 2) NULL,
	react_experience numeric(5, 2) NULL,
	CONSTRAINT candidates_pkey PRIMARY KEY (id)
);