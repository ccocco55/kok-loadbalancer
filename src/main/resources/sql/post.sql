create table tbl_post
(
    id               bigint generated always as identity
        primary key,
    post_content     text   not null,
    post_status      status    default 'active'::status,
    post_warning_status warning_status DEFAULT 'wait',
    member_id        bigint not null
        constraint fk_post_member
            references tbl_member,
    created_datetime timestamp default now(),
    updated_datetime timestamp default now(),
    likes_count      integer   default 0
);

create type warning_status as enum('delete', 'hold', 'wait');

ALTER TABLE tbl_post
    ADD COLUMN post_warning_status warning_status DEFAULT 'wait';

select * from tbl_post