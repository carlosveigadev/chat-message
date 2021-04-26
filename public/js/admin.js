const socket = io();
let connectionsUsers = [];

socket.on("admin_list_all_users", connections => {
  connectionsUsers = connections;
  document.getElementById("list_users").innerHTML = "";

  let template = document.getElementById("template").innerHTML;

  connections.forEach(connection => {
    const rendered = Mustache.render(template, {
      email: connection.user.email,
      id: connection.socket_id,
    });

    document.getElementById("list_users").innerHTML += rendered;
  })
})

function call(id) {

  const user = connectionsUsers.find(connection => connection.socket_id === id);

  const template = document.getElementById("admin_template").innerHTML;

  const rendered = Mustache.render(template, {
    email: user.email,
    id: user.user_id,
  })

  document.getElementById("supports").innerHTML += rendered;

  const params = {
    user_id: user.user_id,
  }

  socket.emit("admin_list_messages_by_user", params, messages => {
    console.log('message', messages)
  })
}