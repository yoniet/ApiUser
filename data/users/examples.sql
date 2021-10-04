DBCC CHECKIDENT ('users', RESEED, 1)  -- לרענן את המספור האוטומטי

DELETE FROM users WHERE UsersId = 23; -- למחוק שורה