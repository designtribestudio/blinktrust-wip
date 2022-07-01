let activeTab = 'devops'

function changeTab(tab) {
    activeTab = tab
    // if (tab == 'devops') {
    //     $('#devops').addClass('active')
    //     $('#devops').siblings().removeClass('active')

    // }else if (tab == 'discovery') {
    //     $('#discovery').addClass('active')
    //     $('#discovery').siblings().removeClass('active')
    // }
    $(`#${tab}`).addClass('active')
    $(`#${tab}`).siblings().removeClass('active')
    $(`#${tab}-content`).addClass('active')
    $(`#${tab}-content`).siblings().removeClass('active')
}

function showExploreModal() {
    $('#firstModal').modal('show');
}

function showExploreModal2() {
    $('#secondModal').modal('show');
}