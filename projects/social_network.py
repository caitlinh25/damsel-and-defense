class User:
	def __int__(self, user_name, user_id):
		self.user_name
		self.user_id = user_id
		self.friends = []
	
	def addFriend(self, friends_id):
		self.friends.append(friends_id)

	def getUsername(self):
		self.user_name

	def getPassword(self):
		self.password

	def setBirthday(self):
		self.birthday
	
	def biography(self):
		self.biography

	def getUserID(self):
		return self.user_id

class Network:
	def __int__(self):
		self.users = []

	def addUser(self,user_name):
		for users in self.users:
			if user_name == user.getUsername():
				print("That username is already taken. Please try another username.")
				return
		user_id = len(self.users)
		self.users.append(User(username, user_id))

	def getUserID(self,username):
 		user_id = -1
 		for user in self.users:
 			if username == user.getUserName():
 				user_id = user.getUserID()
 			return user_id  

 	#def addFriend(self, users):
 		#for i in self.users:
 		#	user1_id = self.getUserID(user1)
        #	user2_id = self.getUserID(user2)
		#if user1_id and user2_id == 
		#user1 = self.users[user1_id]
       # user2 = self.users[user2_id]




def main():
	mynetwork = Network()
	done = False
	while not done:
		menu_option = input("Type 1 to add user, 2 to add a friend, 3 to print all users, 4 to print all friends, and 5 to quit. ")
	if menu_option == 1:
		username = input("Username: ")
		mynetwork.addUser(user_name)
		#password = input("Password: ")
		#mynetwork.
		#birthday = input("Birthday (ex: 01/01/00): " )
		#mynetwor
	#elif menu_option == 2:

if __name__== '__main__':
    main()

#add user and connections