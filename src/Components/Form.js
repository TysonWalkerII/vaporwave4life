import React from "react";
import Pomodoro from "../Pomodoro";

function Form() {
  let text = `⠀⠀⠀⠀⠀⠀⠀⢠⠂⢚⠀⠀⠀⠀⠀⠐⠋⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⠀⠤⢒⡐⢤⡀⣀⣲⣏⢶⣈⡻⢽⠃⠀⠀⠀⠀⠀⠘⢌⢻⣭⣑⠒⠒⠤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⢂⣶⡐⠣⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⢠⣄⠀⠀⠀⠠⣴⠃⠀⢀⣤⡟⠀⢘⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣩⠷⠖⢪⡏⠉⢻⡀⠈⠉⠉⠛⢿⣷⣤⣐⠲⠤⣀⣠⣴⢶⡶⣬⡀⢑⣄⡀⠀⠀⠈⠉⠒⠦⢤⣀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⡠⠄⠒⣰⢢⠖⡀⠄⠂⠀⢀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀
  ⠀⠀⢿⣿⣶⣤⣀⣠⣤⣾⣿⣿⡇⠀⣸⣿⡼⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠶⠋⢁⣄⡤⠦⠶⠹⣖⣷⣷⣶⢲⣦⣤⣀⠀⠙⢯⡀⢀⢻⣿⣿⣭⣝⣿⣿⢾⣹⣿⡶⢄⠀⠀⠄⠀⡀⠀⠉⠓⠲⣦⣴⣋⠉⠀⢼⡚⠲⠀⠤⠘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀
  ⠀⠀⢸⣿⣿⣿⣿⣟⣿⣿⣿⣿⠃⢀⣿⡿⢠⣤⠀⢀⣀⣀⡀⣤⢞⡩⠖⠊⢁⡞⠀⠀⠀⢢⢠⣾⣿⣻⣤⣿⣿⡯⢤⣝⣦⡀⢹⡄⠘⣷⡽⣭⢻⣚⡿⣭⣳⠿⣮⣗⡶⣥⡤⢀⠙⠉⠑⠀⠀⠘⢩⣷⣌⡉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀
  ⠀⠰⠄⢸⣿⣿⡛⠻⠛⣹⣿⣿⠀⡾⠀⢳⡜⠀⠛⠀⣪⣟⠟⠛⠋⠀⠀⠀⢸⣄⣣⢀⠀⣠⣿⣷⣻⠽⢯⣉⣿⣾⣒⣏⢻⣝⣆⢣⠀⠘⣿⡵⣯⡯⠷⠿⠯⣿⠝⠀⠀⠘⠢⢄⣰⣦⣤⡤⢄⣀⣾⢧⡿⢫⣧⡄⠀⠀⢀⣀⣀⠠⠤⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢤⡤
  ⠒⠀⠁⠘⢿⣼⡃⢰⣄⣹⣿⡋⢀⣿⣶⡾⠁⠀⣀⡾⢫⠝⠈⠲⣤⡀⠀⠄⠀⡽⢉⡙⢿⣿⡿⣛⠵⡒⢂⠙⢻⢮⣍⠛⣮⡹⢿⣿⠀⣤⠞⡭⠐⡠⠡⠄⠰⢀⠉⠲⢄⠀⠀⠀⠀⠀⠙⠢⢤⣼⣿⣿⡗⠂⣿⣻⣦⡞⠉⠁⠀⠀⠀⢀⡀⢀⠀⣀⠤⠤⢄⣠⢰⠃⡀⠌⠁
  ⠀⠀⢀⠂⢈⢋⡉⡉⠡⠌⣉⢀⠀⠈⣯⣁⣠⡾⠉⡀⢠⠠⢌⡀⡀⠉⠁⣂⠘⢧⣠⡾⠿⠻⠋⠉⠈⠁⢈⠀⡙⣯⢿⡜⣽⣿⣽⣿⠞⣥⡻⢐⠡⢀⠂⡈⠠⠠⠐⠠⠄⠙⢦⡀⠀⠀⠀⠀⣼⣏⢯⡏⠛⢳⡿⣻⡟⠃⠄⠀⠒⠚⠃⠀⢀⠙⠈⠭⠀⠄⠈⠀⠁⠀⠀⠀⠀
  ⠀⠀⠀⠡⠄⠀⠁⠈⠑⡆⠈⠀⠀⠀⢉⠉⣈⠁⡀⠈⠀⠁⠀⡆⠁⠈⢠⣃⡶⠿⠛⠓⠉⠀⠀⠀⡐⠈⠠⠴⡐⢬⣳⢭⣻⣿⣿⣯⢝⣷⣽⠲⠐⠀⠂⠄⢂⠐⣈⠠⠐⢀⠀⠹⣖⠀⠄⣸⣟⣮⡟⢉⡿⣟⡵⡿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⣖⠲⠀⠂⠩⠔⢡⠚⠁⠩⠙⠈⠈⠃⣌⠐⠈⠀⠠⠒⠰⡐⢄⡰⠀⣻⠀⣣⡅⠀⠀⠀⠀⡁⠔⣠⣤⣤⣤⣀⠙⣾⡱⡞⠇⠛⣮⣿⣿⣷⣞⠻⢦⣌⡠⠐⠀⢀⠠⠀⡀⠄⠈⢳⣰⣿⣽⡞⢀⣾⣝⢾⡿⠁⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠈⠁⠐⠂⠒⠀⢠⡂⢰⣶⡶⠂⠄⠬⠰⠐⡂⠄⠠⢆⡀⠘⡠⢀⣶⣭⣄⠀⠀⠀⠀⠌⣀⣴⡾⢟⢯⡹⢜⠯⣿⢼⣏⡷⢌⡼⣋⣴⢺⢯⡻⣄⡈⣼⣷⣶⠶⠦⣄⣁⠀⡈⠈⠘⢻⣯⡟⢠⣿⡳⣞⡽⠁⠀⠀⠀⠀⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠑⠈⠂⢈⢚⣡⣾⠏⠀⠑⠠⠴⠒⠄⠄⠂⠑⠀⣱⣦⡤⠜⠿⡿⠟⠀⠀⠀⣀⣾⢋⡱⠌⠘⡰⡘⣌⠶⣍⣞⣾⠏⣾⠗⠛⠚⠋⠉⡙⠛⠻⣍⠉⠙⣇⣀⠠⣿⣧⡴⠦⠤⣽⣿⣱⣾⡷⣝⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠰⠊⠉
  ⠀⠀⠀⠀⠀⢀⢨⣿⣟⣟⡏⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡿⠋⠀⠀⠀⠀⠀⠀⢀⣴⡟⠋⠁⠀⠀⠀⠀⠓⣬⠻⣜⣶⠃⣜⠡⡟⢤⠀⢂⠐⡀⢁⠂⡈⢷⡀⠀⠈⠉⠙⠻⠽⣧⣀⣀⣾⣿⣿⣿⡟⠓⢢⡀⠀⠤⠤⠀⢄⣀⣼⠧⠄⠂⢒⣀⢀⡌⠀⠀⢰⢎⠵⢛⠀⠤
  ⠀⠀⠀⠀⠜⠀⠀⢀⡿⣸⠇⠀⠀⠀⠀⠀⠀⠀⢀⡼⡿⣸⠃⠀⠀⠀⠀⠀⠀⢠⣿⠟⡀⠀⠀⠀⠀⠀⠀⣸⠇⠠⡘⢀⠄⡘⣇⠻⡄⠇⡀⠄⠠⢀⠄⡀⢀⢻⡄⠃⠄⠀⠀⠠⠀⠘⠛⠛⣿⣜⣿⣸⣄⣿⡿⣧⠀⠀⠠⣼⣿⣿⡄⢇⠀⣿⡤⠛⣀⡀⠤⠘⠀⠀⠀⠀⠀
  ⠀⠀⢀⡜⡶⢀⠴⠋⣠⢿⠀⠀⠀⠀⠀⠀⠀⡰⢋⡞⡶⠁⠀⠀⠀⠀⠀⠀⣰⣿⢃⡘⠄⠠⠀⠀⠀⠀⡰⠁⠀⠀⠁⠂⠀⠁⠌⠁⡙⠆⠁⠀⠐⠀⢂⡀⠠⠀⢻⣤⠈⠠⢁⠈⠅⠐⢈⡄⠸⡿⣇⠀⢉⠻⣄⠈⠒⠒⡶⠛⡕⣚⢓⠚⣏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠂⠁⠉⠡⠀⠀⠀⢰⡟⣸⠀⠀⠀⠀⠀⢀⡼⢁⡟⡸⠁⠀⠀⠀⠀⠀⠀⣾⢿⡇⢱⠂⡎⡐⠀⠀⠈⠴⠁⠀⠀⠀⡨⡄⠀⠀⠀⠀⠀⠈⠂⠁⠀⠀⠄⡀⢂⠡⡀⢳⡍⢐⡀⠂⢄⡡⢂⡠⢁⠭⣻⡄⠀⢢⡈⠳⢤⠞⡠⢃⡔⠌⢧⡆⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⢦⠀⠊⠀⠀⠀⠀⢸⣏⢹⡄⠀⠀⠀⢠⠞⣠⡟⡰⠃⠀⠀⢈⠀⠀⠀⣼⢃⡏⡌⠆⠣⢑⡀⢠⠀⣡⡞⠀⠀⠀⠀⠁⡆⠀⠀⠀⠀⠀⡀⡈⠀⠄⠌⢰⣄⠠⡏⡰⠈⢿⡀⢢⢁⡂⠔⠦⣅⠈⡔⣩⠿⡀⠀⠐⢠⡼⢘⡡⠥⣌⠫⠘⣧⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⢸⢯⡌⢇⠀⠀⢠⠋⠐⡼⡑⠀⠀⠀⠠⠀⡀⠄⢸⣏⡟⡔⢃⡋⢣⢁⠖⡉⢴⠿⠁⠀⠀⠄⡀⠸⢁⠀⠀⣸⠆⠡⢆⡅⠆⡐⠂⣘⣣⠌⢧⡑⢆⠸⣿⡀⠥⣑⠙⠲⣈⠢⠐⢢⠹⢷⣤⠾⠁⠰⣡⠣⡘⡄⢪⣁⢹⡆⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠈⡇⠳⣈⢧⣰⠃⡑⣸⡇⠀⡀⢀⠈⠀⠄⠀⢄⡟⣼⢱⠪⢅⡜⠥⣊⡜⡐⣿⡀⢇⠎⡝⡠⠱⣘⠸⡀⣔⣿⠨⡑⢎⠤⢃⠤⡑⡄⢺⡜⠌⣷⠸⡐⢯⣷⡀⠬⢉⡂⠐⢡⠃⠘⢜⣩⢿⡚⠀⠢⠔⠃⡀⢉⠧⡰⠈⡅⠀⣻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠱⡄⠉⢲⣽⣶⣤⡯⠁⠄⢀⣠⠐⡁⢀⠅⣸⢱⡏⣎⢷⣊⡔⢣⢜⣰⣿⠣⢜⡞⣸⡇⡓⣡⣿⡐⢢⣿⣿⠠⢍⠢⢚⢡⢚⡅⠂⣸⢬⢓⡸⣇⠢⢹⣞⣷⠀⠂⠑⠈⡀⠀⠂⠰⣘⣚⣯⠐⠀⠩⠀⠄⡈⠆⠥⡑⠤⠀⢸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢢⣼⣁⡀⣼⠃⡐⠠⢀⠧⢀⠀⠂⣤⡟⣼⣱⡈⠚⠁⠆⢧⡞⣼⣿⢣⣾⢱⣺⡔⣡⡓⢾⣧⢒⡿⢿⠘⡌⡃⢎⠰⡡⠘⡅⢺⢦⢹⠔⢻⡈⢽⣻⡼⡇⢲⡌⠀⠘⢆⠐⠀⢆⡲⣹⡆⠐⡨⢁⠂⠄⠐⠂⢈⣧⠂⠸⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⢘⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⢠⣟⠀⡁⠀⡜⠠⢄⠐⢈⣾⡗⣿⣹⣇⠀⢉⡎⠉⠁⣿⣿⣽⡁⢸⣿⣧⣓⡳⢼⣿⣸⡟⣸⡆⡈⠐⣏⠐⠡⡙⠄⣽⡎⠘⡏⠈⣧⢊⣽⣷⢻⡰⡇⠀⢠⠈⡖⠈⢄⡒⡴⢧⠐⠀⠂⠌⡀⢂⠉⠠⢚⣷⡀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀
  ⢈⢨⠀⠀⠀⠀⠀⠀⠀⠀⡿⢁⠐⣸⣇⠂⡀⠀⡏⡑⡊⠀⠌⣾⣯⡷⣹⣿⡆⢠⣷⠀⠌⣸⢿⡄⠀⠘⣿⢷⠛⠡⣧⢻⣿⠀⣿⣗⢀⠰⡉⢀⠀⠉⠀⣿⣿⠀⣿⠀⢽⡀⢾⣿⢭⡗⣏⠀⡀⠂⢺⡆⠠⠐⠂⢾⡄⠉⡐⢀⠂⠤⡁⠂⢑⢆⣧⡀⢳⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⡄⡄⠀⠀⠀⠀⠀⠀⠀⡇⢈⠐⣿⢌⠂⠐⡩⠔⣡⢁⣊⠐⣻⣿⣓⢻⣯⡷⢮⣿⡶⠾⢿⡛⣯⠁⠂⣿⠸⡎⢀⠉⣿⢿⡔⢿⣿⣦⡠⡇⠀⠈⠀⠀⣿⢸⡄⣹⠂⢸⣇⢫⢿⡧⣟⡯⠀⢁⠈⠁⢿⡀⠁⢀⠒⣧⠀⠱⠈⠌⢢⢉⡴⠈⢾⣸⣧⡈⣧⠀⠀⠀⠀⠀⠀⠀
  ⠀⠱⣜⡄⠀⠀⠀⠀⠀⢸⡁⠀⢢⣟⢎⠀⠐⣹⠐⢀⠎⡔⢠⢻⣿⡍⣞⣧⠜⣧⢻⣇⡀⢸⡇⢹⡄⠀⢿⠀⣿⠀⠀⣾⣸⠻⣄⢻⣜⡻⣷⣤⣥⣤⡶⣿⣦⣧⢸⡇⢸⣷⣘⢿⣟⢶⣿⠀⠂⠁⢂⢸⡇⢁⠂⡀⣹⠄⠠⢃⠱⡂⢇⢲⡉⠸⣯⡇⠱⡘⣆⠀⠀⠀⠀⠀⠀
  ⠀⠀⠈⠻⣆⡀⠀⠀⠀⢸⡅⠈⢰⣏⡞⠀⠂⣱⠀⠊⢆⡍⢰⣼⣿⣧⣽⣿⣿⣿⣯⣿⣝⡶⣇⠀⢧⠀⢸⡀⠸⣇⠀⢸⢿⡆⠈⠻⣯⡕⡿⡆⠠⠀⢰⡿⠀⢹⡈⣿⢠⢿⣬⣛⣿⢚⡇⠀⠁⠔⠀⢸⣳⢈⡶⡐⢩⡇⠀⠌⣱⡘⡌⢆⠭⢡⠹⣇⠀⠙⣼⡀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠉⠓⠶⣶⡾⢷⣡⣸⡷⡃⠄⢂⠱⡀⠐⠌⠰⢡⣿⣏⢻⣿⣿⣿⣿⣿⣿⣿⣷⣼⡆⠈⢣⡈⡇⠀⠙⣆⠸⡏⣷⡀⠀⠸⣿⣿⣿⣿⣿⣿⣷⣄⣨⣗⣿⣌⠻⣧⡽⣿⣎⡷⢈⠀⠆⢀⢈⡷⢮⡳⣝⣂⠃⠐⠠⠀⢳⡈⠌⣲⡈⢑⠸⡄⠀⠈⢧⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠻⡟⡵⠀⠀⠸⡇⠀⠌⠐⡀⣿⣿⣿⡿⠉⣿⣿⣿⣿⡏⠉⢻⣷⠀⠀⠱⣼⡀⠀⠘⣆⢇⠈⢷⣄⠐⢺⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣟⣭⣿⡗⣿⣯⡧⢸⠠⠀⠀⣲⣝⣳⢻⡜⣢⠆⢈⠐⢀⠂⢻⣤⡙⣷⠀⢂⢳⡀⠀⠈⢆⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢀⡠⠖⠚⠉⠀⢸⣟⡃⡄⢁⠂⢿⡀⠅⢂⠀⣿⡟⢿⡇⠀⣿⣿⣿⣿⣿⣦⣼⡯⠀⠀⠀⠀⠓⠀⠀⠈⠻⡄⠀⠹⡓⠻⠁⠀⣼⣿⣿⣿⣿⠋⠙⢿⣿⣿⣿⣿⣽⡷⡋⣾⠀⢢⡀⣹⡞⣧⡟⣼⢹⡧⡀⠂⠠⣀⠢⡽⣟⡬⣷⡀⠘⣷⣆⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⢀⡤⠖⠉⢀⣢⣴⣬⣾⡶⡷⡄⣧⠂⢈⠼⣗⠢⡐⠄⣿⣷⠈⠃⠀⢸⣿⣿⢿⣻⢯⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠆⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣤⣀⣼⣿⡿⣿⣿⣿⣗⣣⣝⡁⢸⡇⣼⣟⡳⣽⢆⢯⡗⣧⠈⠐⠠⢀⠀⠻⣷⣻⣶⠈⠹⣷⡀⠀⠠⠀⠀⠀
  ⠀⠀⠀⠁⢀⡴⢚⡿⢛⡩⠭⢁⠘⣷⢎⠿⣈⠀⠊⣿⠀⣿⠀⣹⢻⣇⠀⠀⠀⢹⣯⡟⣭⠗⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢯⡿⣿⢿⣿⣻⡽⣿⠃⢘⣿⣿⡟⣳⡜⠀⣼⣷⢧⣛⣷⡹⣚⡾⢽⣺⡐⠠⠁⠂⠌⠠⡈⢻⡞⣧⠐⠒⠱⢄⠀⠀⠀⠀
  ⠀⠀⢀⠕⠉⢠⠎⡰⢏⣀⠤⡄⢊⢻⣮⢻⡄⠃⡀⡸⡅⢘⣇⠈⢉⣿⠀⠀⠀⢶⣿⣿⡾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡐⣿⢯⡝⡯⢛⢚⣳⣽⠃⠴⢋⣽⢯⡹⣖⡫⢠⡿⣝⢮⣿⠖⣹⣵⠃⣟⡰⢧⡐⠈⢷⡡⠐⡐⢀⠙⢿⣷⡌⠁⠀⠤⡀⠃⠀
  ⣬⢅⠎⠀⣀⣏⡸⣡⢋⣬⣷⠽⣳⢛⣧⢏⡞⣧⠀⣷⢸⠈⣿⣯⠳⣜⡇⠀⡀⠠⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣶⣷⠶⠛⠁⠀⢀⡼⣙⡾⣱⢾⢣⡟⣵⢫⣾⠋⢧⣿⢃⣼⢱⡏⢽⡳⣀⠈⣿⡔⠐⠂⠱⡌⢯⣽⡄⠒⠀⠱⠄⠀
  ⠁⠊⠙⠃⠀⡏⣹⠷⡏⠀⣼⢥⢣⢫⢿⡜⣮⠽⣆⢻⣎⠄⡌⢿⣻⣮⣷⣄⣀⣢⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠈⠁⠀⠀⠀⠀⣠⣾⢻⡽⣏⣗⢫⡞⣹⢎⡿⠃⢠⣾⣿⡛⣾⣹⡏⢸⡝⣿⣆⠹⣟⠆⠠⠁⢻⡄⠹⣿⠀⢃⠈⠡⠄
  ⠀⠀⠁⠈⠑⢻⡽⠿⡿⣷⣽⡛⠺⢦⣻⣍⢾⣙⡻⡼⣹⡞⣧⢀⠛⢿⣯⡙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠀⠁⠀⢀⣤⢾⣏⣷⢿⣹⠺⣌⠷⣸⣧⠟⢁⡬⣿⣿⣱⡯⠥⠿⠧⢬⣻⡼⣹⣜⣻⠄⢰⡀⢹⣷⡀⢼⡌⣇⠂⠁⠘
  ⠀⠀⠀⠀⠀⠀⠳⣄⠀⢈⠻⢮⣑⢳⡉⣿⣺⣇⡷⣙⠧⣟⡜⣷⣆⡜⢭⡳⣄⠀⠀⠀⢀⠄⠀⠀⠀⣶⣦⡤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⠤⢤⡶⡿⣯⣾⣿⠿⣏⢾⣱⢻⣜⣿⠟⢁⣲⣾⣿⣟⣿⣻⢷⣆⠀⠀⠀⠈⢻⣷⢏⣿⠀⡂⢯⠀⢳⣣⡘⢦⡍⠠⠐⠀
  ⠀⠀⠀⠀⠀⠀⠀⠘⠲⢤⠀⣬⡿⣟⣻⢻⣿⣿⣙⠺⣭⣷⡭⢆⣝⡻⣦⡙⠲⣦⣤⣶⠟⠀⠀⠀⠀⢻⡧⠘⢍⣳⠀⠀⠀⠀⠀⠀⠀⠀⠐⠶⣶⡶⠞⡞⣟⠻⣝⢾⣹⣝⣮⣟⡿⢚⡥⢦⣫⣿⣿⣳⡿⣞⣯⣿⣿⡄⠀⠀⠀⢸⡏⣿⣳⢸⡇⠈⠧⢸⠳⡼⡰⠌⢀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⣼⡟⢱⢫⣽⢳⣾⣧⢹⣽⣾⣿⡍⢻⣦⣵⣭⣿⢳⣽⣿⣧⡄⠀⠀⠀⠀⠀⢻⡜⠁⣼⡇⠀⠀⠀⠀⠀⠀⠀⣤⠀⠀⠈⠙⠛⠒⣿⡟⠛⣯⣽⡞⣵⣯⢻⡜⣧⣿⣿⣿⣿⣽⣿⣿⣿⣿⠀⡄⠀⣤⠋⠀⣿⡟⣼⠃⠀⠀⣾⢳⡅⠁⠀⠂⠀⠀
  ⢚⣤⡤⠀⠉⠒⠒⣤⡆⢘⣯⡽⣃⣾⡽⣺⣽⢻⡓⢿⣧⡿⢷⡷⣾⣟⡳⣼⣋⠷⣌⠛⠹⣦⡀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣖⣒⣛⣋⣥⣴⣿⠿⣽⣻⣷⣯⣯⠗⠋⠁⠀⠙⠻⠿⢿⣿⣿⣯⠵⠖⠋⠁⠀⣸⣿⢣⡟⠀⢀⣸⣯⠞⠁⠀⠀⠀⠀⠀
  ⠀⠀⠐⠠⢀⣀⣽⣿⣿⣿⡿⠳⢿⣽⢞⣵⠃⢀⣿⠾⣽⣹⢭⣗⣣⢿⡷⡀⠙⣖⠋⣿⣿⣽⡍⠓⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⠶⣞⣿⣫⣭⠿⣽⢻⣽⣺⣿⠷⠟⠉⢀⠀⠀⠀⠀⠀⠠⠄⣠⠋⠀⣠⠆⠀⠀⠀⠀⣰⡟⣣⠏⠀⣀⣼⠟⠁⠀⠀⠀⠠⠐⠀⠀
  ⠀⠀⠀⠀⠀⣼⡿⠁⡰⠚⡇⠀⡊⣉⣾⣿⣶⣟⣞⡛⣤⢫⣳⡿⣭⣿⡅⣙⢦⠈⢧⣻⡄⠀⠀⡀⣆⠉⠲⠤⠴⢶⣶⡒⢞⢭⡛⢏⣣⢟⣼⣟⡾⣵⣫⢿⡵⣿⣿⡿⠉⠀⡀⡄⡎⠀⠀⠀⢀⠀⣰⠞⠁⠀⠰⢋⣀⣀⡤⠤⢼⣿⠝⠡⠐⣺⠍⠀⠀⠀⠠⠐⠀⡁⠀⠀⠀
  ⠀⠀⠀⠀⣼⣯⣵⡾⣿⢶⣿⣉⣹⢟⣻⢻⢧⣛⣮⡽⣞⡧⣷⡿⢿⠳⣖⠈⢻⡳⢾⣇⡘⢦⣁⡀⠈⢣⣀⠄⠠⠘⣿⡜⢬⠒⣍⢖⣱⣿⣻⢾⡽⣳⡟⣋⣴⣾⡿⢀⣎⡔⢸⠀⣇⠀⠀⠀⠈⢀⣡⠔⠒⠉⠉⠉⠀⠀⠀⣰⠟⠉⠀⣠⡶⠁⠀⡀⢄⠁⡀⠂⠁⠀⠀⠀⡀
  ⠀⠀⠀⢀⣿⣟⣾⣼⡿⠓⠞⠻⠮⣟⣯⣟⣯⢻⣶⣯⠿⠿⠿⠿⢯⡸⣍⠒⣦⣷⠛⣠⠝⢹⡿⣷⣒⣆⣉⣁⣠⣦⣽⣯⣈⣳⠌⠲⠰⣿⣽⣳⣿⣿⣿⣿⣟⣿⠁⣾⠣⣧⢸⡀⠘⢦⣀⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⢀⣴⣇⠤⠐⠁⠀⠀⠀⠀⠀⠀⠄⠈⠀
  ⠀⠀⢀⣾⣿⡾⣿⣿⣷⠀⠀⠀⠀⠈⣹⣾⡳⣟⣽⣻⡀⠀⠀⠀⠈⢣⡽⢤⣿⣿⢳⣯⢴⣾⣿⠋⠉⠉⠉⡉⠄⢠⣾⣷⣶⣎⣿⣷⣿⢿⣷⣿⣿⣿⣿⣿⡿⠻⡆⢷⠴⠙⣮⣷⣦⠞⠹⣷⠦⠤⢀⣀⣀⠤⠠⠔⠊⠁⠀⣀⡴⠚⠁⡟⠀⠠⠀⠀⠀⠀⠀⡀⠂⠄⠈⠀⠀
  ⠀⠀⣾⢿⢹⣷⠛⡟⠃⠀⣤⠀⠀⣶⣿⣿⢽⡽⣧⣿⡇⠀⠀⠀⠀⠀⠁⠊⣝⣿⡆⣹⣿⣿⠉⠳⣤⡀⠀⠀⠀⠸⡛⠻⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣾⠁⠀⢻⢾⡧⢀⣠⣯⣧⡐⠂⠀⠉⠒⠦⠤⠤⠤⠤⠤⠖⠒⠋⠁⠀⠀⠸⠁⠐⠀⠀⠀⣀⠄⠀⠀⠁⠀⠀⠀⠀
  ⠀⠀⣧⣠⠞⣹⣄⠀⢀⣾⣿⡤⠂⢹⠟⠃⢀⣿⣽⣾⠙⢦⣀⠤⠤⡀⠀⢰⠉⣇⡼⣿⡽⣟⠤⣀⣾⡿⣤⠤⣄⡀⠈⠒⠛⠉⠀⠀⠀⠈⠁⠀⠀⠉⠉⠀⠀⠀⠀⠀⢀⡮⡟⣣⠼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⠂⠀⠀⠀⡐⣦⡨⠷⡄⠀⠀⠀⠀⠀⠀
  ⠀⠀⠈⢷⣀⣇⠈⠳⣼⣿⣟⠁⠀⠈⠀⣀⣾⣣⠿⠉⠀⠀⠳⣄⢀⣏⡴⠉⢀⠾⣾⣿⠿⣝⣆⠈⠉⠙⣟⡿⠀⠉⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⣿⣠⠗⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠀⠀⠀⠠⣰⡾⠉⠀⠀⠘⡆⠀⠀⠀⠀⠀
  ⠀⠀⠀⠈⣏⠉⠓⢶⣹⣛⠋⠀⢈⣉⠉⣉⣹⣡⠊⠉⠙⠳⠤⠼⠋⢸⠁⢠⠏⢀⣿⣏⠻⡇⢸⣣⠀⠀⠈⠙⢢⡀⠠⣶⣷⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠚⢡⣿⣋⠖⢁⣀⣠⠴⠶⠾⠥⠤⠤⠤⠴⡤⣤⡠⠄⠒⠁⠀⠀⢀⠠⠕⠉⠀⠀⠀⠠⢀⠘⣆⠀⠀⠀⠀
  ⠀⠀⠀⡏⠈⠙⠲⢾⣿⣉⣉⢉⣛⡿⠋⠁⣸⣇⠀⠀⠀⠀⠀⠀⠰⠉⠐⢧⠀⢸⣿⠁⠸⡄⠀⢳⣳⠀⠀⠀⠀⠉⠳⠿⢿⣿⣌⠉⠦⣄⠀⠀⠀⢀⣠⠖⠋⠀⢠⣿⢻⠁⢙⠄⡴⣇⢂⡐⠀⠆⠡⠐⣌⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⡀⠂⠀⣈⠀⠀⠀⠀
  ⠀⠀⠰⠓⠦⣄⣸⣿⣿⠏⠉⠉⠉⡇⠋⠍⠁⣸⡂⠀⠀⠀⠀⠄⠈⠀⢀⠜⠀⢼⣿⠁⠀⠙⠶⠿⡿⢢⣀⠀⠀⠀⠀⠀⠀⢲⢿⣀⣀⣨⡷⡔⠊⠉⠀⠀⣀⣤⣿⢋⠇⠊⠀⠀⠈⠙⠋⠓⠳⣤⡁⠢⠀⠀⢀⠀⠀⠀⣀⡤⠤⠤⠤⣀⣰⠁⠀⠀⠾⠏⠀⠙⠁⠀⡀⠀⠀`;

  const onClick = () => {
    document.getElementById("show").innerHTML = text;
  };

  return <button onClick={onClick}>Login</button>;
}

export default Form;
