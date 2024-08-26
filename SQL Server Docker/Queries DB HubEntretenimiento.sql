use HubEntretenimientoMega

-- creación de entidad 'users'
create table users (
	id_user int identity(1,1) not null,
	name varchar(25) not null,
	last_name varchar(50),
	email varchar(30) not null,
	password varchar(20) not null,
	age smallint,
	profile_photo varchar(1000),

	-- restricciones entidad 'users'
	constraint Pk_user primary key (id_user asc),
	constraint UQ_user unique (email),
	constraint CK_age_no_negative check (age > 0)
)

-- creación de entidad 'movies'
create table movies (
	id_movie int identity(1,1) not null,
	title varchar(50) not null,
	date varchar(10) not null,
	description varchar(1000) not null,
	duration varchar(20),
	cover_img varchar(1000),
	video_url varchar(1000),

	-- restricciones entidad 'movies'
	constraint PK_movie primary key (id_movie asc),
	constraint UQ_movie unique (title, date)
)


-- creación de tabla 'sports'
create table sports (
	id_sport int identity(1,1) not null,
	title varchar(50) not null,
	date varchar(50) not null,
	description varchar(1000) not null,
	cover_img varchar(1000),
	video_url varchar(1000),

	-- restricciones entidad 'sports'
	constraint PK_sport primary key (id_sport asc),
	constraint UQ_sport unique (title, date),
)

-- creación de tabla 'series'
create table series (
	id_serie int identity(1,1) not null,
	title varchar(30) not null,
	date varchar(30) not null,
	description varchar(1000) not null,
	cover_img varchar(1000),
	--num_seasons smallint,
	--num_episodes smallint,

	-- restriciones entidad 'series'
	constraint PK_series primary key (id_serie asc),
	constraint UQ_serie unique (title, date)
)

-- creación entidad 'serie_seasons'
create table serie_seasons (
	id_season int identity(1,1) not null,
	id_serie int not null,
	title varchar(30) not null,
	date varchar(30) not null,
	description varchar(1000) not null,
	cover_img varchar(1000),

	-- restricciones entidad 'serie_season'
	constraint PK_season primary key (id_season),
	constraint FK_serie foreign key (id_serie) references series(id_serie),
	constraint UQ_season unique (title, date),
)

-- creación entidad 'serie_episodes'
create table serie_episodes (
	id_episode int identity(1,1) not null,
	id_season int not null,
	title varchar(30) not null,
	episode_number smallint not null,
	date varchar(30) not null,
	duration varchar(20),
	description varchar(1000) not null,
	cover_img varchar(1000),
	video_url varchar(1000),

	--restricciones entidad 'serie_episodes'
	constraint PK_episode primary key (id_episode),
	constraint FK_season foreign key (id_season) references serie_seasons(id_season),
	constraint UQ_episode unique (title, date)
)


-- creación de entidad 'favorites'
create table favorites (
	id_favorite int identity(1,1) not null,
	id_user int not null,
	id_movie int,
	id_serie int,
	id_sport int,
	--created_at timestamp,

	-- restricciones entidad 'favorites'
	constraint PK_favorite primary key (id_favorite asc),
	constraint FK_favorite_user foreign key (id_user) references users(id_user),
	constraint FK_favorite_movie foreign key (id_movie) references movies(id_movie),
	constraint FK_favorite_serie foreign key (id_serie) references series(id_serie),
	constraint FK_favorite_sport foreign key (id_sport) references sports(id_sport),
	constraint UQ_favoriteUniq unique (id_user, id_movie, id_serie, id_sport),

	CONSTRAINT chk_multimedia_unique CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
) 

-- creación de entidad 'history'
create table history (
	id_history int identity(1,1) not null,
	id_user int not null,
	id_movie int,
	id_serie int,
	id_sport int,
	created_at timestamp,

	-- restricciones entidad 'history'
	constraint PK_history primary key (id_history asc),
	constraint FK_history_user foreign key (id_user) references users(id_user),
	constraint FK_history_movie foreign key (id_movie) references movies(id_movie),
	constraint FK_history_serie foreign key (id_serie) references series(id_serie),
	constraint FK_history_sport foreign key (id_sport) references sports(id_sport),
	constraint UQ_historyUniq unique (id_user, id_movie, id_serie, id_sport),

	CONSTRAINT chk_history_unique CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
) 

-- creación de entidad 'hiddens'
create table hiddens (
	id_hidden int identity(1,1) not null,
	id_user int not null,
	id_movie int,
	id_serie int,
	id_sport int,
	created_at timestamp,

	-- restricciones entidad 'hiddens'
	constraint PK_hidden primary key (id_hidden asc),
	constraint FK_hidden_user foreign key (id_user) references users(id_user),
	constraint FK_hidden_movie foreign key (id_movie) references movies(id_movie),
	constraint FK_hidden_serie foreign key (id_serie) references series(id_serie),
	constraint FK_hidden_sport foreign key (id_sport) references sports(id_sport),
	constraint UQ_hiddenUniq unique (id_user, id_movie, id_serie, id_sport),

	CONSTRAINT chk_hidden_unique CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
) 

-- creación de entidad 'directors'
create table directors (
	id_director int identity(1,1) not null,
	name varchar(50) not null,
	last_name varchar(50) not null,
	born varchar(50),
	nationality varchar(50),
	profile_photo varchar(1000),

	-- restricciones entidad 'director'
	constraint Pk_director primary key (id_director asc),
	constraint UQ_director unique (name, last_name),
)

-- creación de entidad 'actors'
create table actors (
	id_actor int identity(1,1) not null,
	name varchar(50) not null,
	last_name varchar(50) not null,
	born varchar(50),
	nationality varchar(50),
	profile_photo varchar(1000),

	-- restricciones entidad 'actors'
	constraint Pk_actor primary key (id_actor asc),
	constraint UQ_actor unique (name, last_name)
)

-- creacion de entidad 'genres'
create table genres (
	id_genre int identity(1,1) not null,
	genre_name varchar(30),

	-- restricciones entidad 'genre'
	constraint PK_genre primary key (id_genre asc),
	constraint UQ_genre unique (genre_name)
)

-- creación de entidad 'multimedia_directors'
create table multimedia_directors (
	id_multimedia_director int identity(1,1) not null,
	id_director int not null,
	id_movie int,
	id_serie int,
	id_sport int,

	-- restricciones entidad 'multimedia_directors'
	constraint PK_multimedia_director primary key (id_multimedia_director asc),
	constraint FK_multimedia_director foreign key (id_director) references directors(id_director),
	constraint FK_multimedia_movie_d foreign key (id_movie) references movies(id_movie),
	constraint FK_multimedia_serie_d foreign key (id_serie) references series(id_serie),
	constraint FK_multimedia_sport_d foreign key (id_sport) references sports(id_sport),
	constraint UQ_multimedia_directorUniq unique (id_director, id_movie, id_serie, id_sport),

	CONSTRAINT chk_multimedia_director_unique CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
) 

-- creación de entidad 'multimedia_actors'
create table multimedia_actors (
	id_multimedia_actor int identity(1,1) not null,
	id_actor int not null,
	id_movie int,
	id_serie int,
	id_sport int,

	-- restricciones entidad 'multimedia_actors'
	constraint PK_multimedia_actor primary key (id_multimedia_actor asc),
	constraint FK_multimedia_actor foreign key (id_actor) references actors(id_actor),
	constraint FK_multimedia_movie_a foreign key (id_movie) references movies(id_movie),
	constraint FK_multimedia_serie_a foreign key (id_serie) references series(id_serie),
	constraint FK_multimedia_sport_a foreign key (id_sport) references sports(id_sport),
	constraint UQ_multimedia_actorUniq unique (id_actor, id_movie, id_serie, id_sport),

	CONSTRAINT chk_multimedia_actor_unique CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
) 

-- creación de entidad 'multimedia_genres'
create table multimedia_genres (
	id_multimedia_genre int identity(1,1) not null,
	id_genre int not null,
	id_movie int,
	id_serie int,
	id_sport int,

	-- restricciones entidad 'multimedia_genres'
	constraint PK_multimedia_genre primary key (id_multimedia_genre asc),
	constraint FK_multimedia_genre foreign key (id_genre) references genres(id_genre),
	constraint FK_multimedia_movie_g foreign key (id_movie) references movies(id_movie),
	constraint FK_multimedia_serie_g foreign key (id_serie) references series(id_serie),
	constraint FK_multimedia_sport_g foreign key (id_sport) references sports(id_sport),
	constraint UQ_multimedia_genreUniq unique (id_genre, id_movie, id_serie, id_sport),

	
	CONSTRAINT chk_multimedia_unique_genre CHECK (
        (id_movie IS NOT NULL AND id_serie IS NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NOT NULL AND id_sport IS NULL) OR
        (id_movie IS NULL AND id_serie IS NULL AND id_sport IS NOT NULL)
    )
)