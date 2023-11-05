import mysql from 'mysql';
import mysqlConn from '../../common/dbConnection'


class AuthDatabase{
	userSignup(data){
		return mysqlConn
		.getDbConnection()
		.then((pool) => {
			return new Promise((resolve,reject) => {
				pool.query(
					`INSERT INTO tblUsers (FirstName, LastName, LoginEmail, Password, UserName, UserType, UserStatus, IsEmailVerified, IsActive, IsOnline, LastLogin)
					SELECT ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? 
					FROM DUAL
					WHERE NOT EXISTS (SELECT 1 FROM tblUsers WHERE LoginEmail = ?),
					[
						data.firstName,
						data.lastName,
						data.email,
						data.password,
						data.username,
						data.userType,
						data.userStatus,
						data.isVerified,
						data.isActive,
						data.isOnline,
						data.lastLogin,
						data.email
					],`
				)
			})
		})
	}
}


export default new AuthDatabase();