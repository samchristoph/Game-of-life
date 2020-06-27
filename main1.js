function addSticky() {
    var todoInput = $("#todoInput").val()
    var stickyDiv = $("<div></div>")
    var stickyP = $("<p></p>")
    stickyP.append(todoInput)
    stickyDiv.append(stickyP)
    stickyDiv.addClass("stickyNote")
    $("#stickyNotes").append(stickyDiv)
    return False
}
