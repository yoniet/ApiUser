INSERT INTO [dbo].[users]
(
    [UserName], [password], [email]
)
VALUES
(
    @username, @password, @email
)
SELECT SCOPE_IDENTITY() AS UsersId