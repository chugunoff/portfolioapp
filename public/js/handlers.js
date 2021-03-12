// Получить все кнопки редактирования
var editProjectButtons = document.getElementsByClassName('fa-edit');
var delProjectButtons = document.getElementsByClassName('fa-trash')

var getProjectID = (element) => {
    let projectRowNode = element.parentNode.parentNode;
    let idProject = projectRowNode.id;
    return idProject;
}

var editProject = function () {
    console.log(getProjectID(this));
};

var delProject =  () => {
    console.log(getProjectID(this));
}

Array.from(editProjectButtons).forEach(function (element) {
    element.addEventListener('click', editProject);
});

Array.from(delProjectButtons).forEach(function (element) {
    element.addEventListener('click', delProject);
});