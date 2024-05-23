document.getElementById("new-thread-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newThreadText = document.getElementById("new-thread").value.trim();
    if (newThreadText !== "") {
        var threadListItem = document.createElement("li");
        
        var threadTextSpan = document.createElement("span");
        threadTextSpan.textContent = newThreadText;
        threadListItem.appendChild(threadTextSpan);
        
        var editThreadButton = document.createElement("button");
        editThreadButton.textContent = "Editar";
        editThreadButton.onclick = function() {
            var newText = prompt("Edite seu tópico:", threadTextSpan.textContent);
            if (newText !== null) {
                threadTextSpan.textContent = newText;
            }
        };
        threadListItem.appendChild(editThreadButton);

        var deleteThreadButton = document.createElement("button");
        deleteThreadButton.textContent = "Excluir";
        deleteThreadButton.onclick = function() {
            if (confirm("Tem certeza que deseja excluir este tópico?")) {
                threadListItem.remove();
            }
        };
        threadListItem.appendChild(deleteThreadButton);

        var commentsList = document.createElement("ul");
        commentsList.classList.add("comments-list");
        threadListItem.appendChild(commentsList);

        var commentTextarea = document.createElement("textarea");
        commentTextarea.classList.add("comment-textarea");
        commentTextarea.cols = 50;
        commentTextarea.rows = 3;
        threadListItem.appendChild(commentTextarea);

        var commentButton = document.createElement("button");
        commentButton.classList.add("comment-button");
        commentButton.textContent = "Comentar";
        commentButton.onclick = function() {
            var commentario = commentTextarea.value.trim();
            if ( commentario !== "") {
                var commentListItem = document.createElement("li");
                
                var commentarioTextSpan = document.createElement("span");
                commentarioTextSpan.textContent =  commentario;
                commentListItem.appendChild(commentarioTextSpan);

                var editarcomentario = document.createElement("button");
                editarcomentario.textContent = "Editar";
                editarcomentario.onclick = function() {
                    var newText = prompt("Edite seu comentário:", commentarioTextSpan.textContent);
                    if (newText !== null) {
                        commentarioTextSpan.textContent = newText;
                    }
                };
                commentListItem.appendChild(editarcomentario);

                var deletecomentario = document.createElement("button");
                deletecomentario.textContent = "Excluir";
                deletecomentario.onclick = function() {
                    if (confirm("Tem certeza que deseja excluir este comentário?")) {
                        commentListItem.remove();
                    }
                };
                commentListItem.appendChild(deletecomentario);

                commentsList.appendChild(commentListItem);
                commentTextarea.value = "";
            }
        };
        threadListItem.appendChild(commentButton);

        document.getElementById("threads-list").appendChild(threadListItem);

        document.getElementById("new-thread").value = "";
    }
});