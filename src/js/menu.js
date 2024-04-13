/*========= Menu ========*/
document.getElementById('menu_js').innerHTML = '    ' +
    '<nav>\n' +
    '        <ul class="sidebar">\n' +
    '            <li onclick=hideSidebar()><a href="#"><i class="ri-close-line svg__height"></i></a></li>\n' +
    '            <li><a href="index.html"><i class="ri-home-2-line"></i>HOME</a></li>\n' +
    '            <li><a href="quizz.html"><i class="ri-questionnaire-line"></i>QUIZ</a></li>\n' +
    '            <li><a href="https://www.codedex.io/pricing"><i class="ri-money-dollar-circle-line"></i>SUBSCRIBE</a></li>\n' +
    '        </ul>\n' +
    '        <ul>\n' +
    '            <li><a href="#"><img src="https://www.codedex.io/images/coin-cropped.png" width="25px" height="28px" alt="coin logo" class="logo-image animate">Codédex</a></li>\n' +
    '            <li class="hideOnMobile"><a href="index.html"><i class="ri-home-2-line"></i>HOME</a></li>\n' +
    '            <li class="hideOnMobile"><a href="quizz.html"><i class="ri-questionnaire-line"></i>QUIZ</a></li>\n' +
    '            <li class="hideOnMobile"><a href="https://www.codedex.io/pricing"><i class="ri-money-dollar-circle-line"></i>SUBSCRIBE</a></li>\n' +
    '            <li onclick=showSidebar() class="menu-btn"><a href="#"><i class="ri-menu-line svg__height"></i></a></li>\n' +
    '        </ul>\n' +
    '    </nav>'
/*========= Show Menu ==========*/
function showSidebar() {
    const sidebar    = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar    = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
/*========= FOOTER ========*/
document.getElementById('footer_js').innerHTML = '   ' +
    ' <div>\n' +
    '        <table>\n' +
    '            <tr>\n' +
    '                <th class="tb_f_left">Codédex</th>\n' +
    '                <th >Company</th>\n' +
    '                <th>Links</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td class="tb_f_left">Description</td>\n' +
    '                <td>Description</td>\n' +
    '                <td>Description</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '                <td colspan="3" class="signature">Made by <a href="#">Mohamed Amine Lahiala</a> for <a href="#">Codédex</a></td>\n' +
    '            </tr>\n' +
    '\n' +
    '        </table>\n' +
    '    </div>'