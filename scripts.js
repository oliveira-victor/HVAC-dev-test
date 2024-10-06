const branch1 = document.getElementById('branch-1');
const branch2 = document.getElementById('branch-2');
const map1 = document.getElementById('map1');
const map2 = document.getElementById('map2');

function switchBranch(branch) {
    branch1.classList.remove('active')
    branch2.classList.remove('active')
    map1.style.display = 'none'
    map2.style.display = 'none'

    if (branch === branch1) {
        branch1.classList.add('active')
        map1.style.display = 'block'
    } else {
        branch2.classList.add('active')
        map2.style.display = 'block'
    }
};

branch1.addEventListener('click', function() {
    switchBranch(branch1)
});

branch2.addEventListener('click', function() {
    switchBranch(branch2)
});
