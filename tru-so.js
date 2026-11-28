// DANH SÁCH TRỤ SỞ: sửa tại đây để chỉnh tên và vị trí ghim.
// Lấy tọa độ: trên Google Maps bấm chuột phải vào đúng vị trí, bấm dòng tọa độ để chép
// (dạng "12.7000, 108.0450": số đầu là lat, số sau là lng). Dán vào lat và lng bên dưới.
// Mẹo: mở trang kèm ?edit=1 (ví dụ .../Map/?edit=1) để kéo ghim và đọc tọa độ ở thanh trạng thái.
window.HQS = [
  { name: 'D1', tinh: 'Khánh Hòa', ten: 'Tiểu Đoàn 1 (Bắc Nha Trang)',          lat: 12.287829, lng: 109.163973 },
  { name: 'D2', tinh: 'Đắk Lắk',   ten: 'Tiểu Đoàn 2 (Tân An, Buôn Ma Thuột)',  lat: 12.698944, lng: 108.072306},
  { name: 'D3', tinh: 'Lâm Đồng',  ten: 'Tiểu Đoàn 3 (Đức Trọng)',              lat: 11.7570, lng: 108.3136 },
  { name: 'E07', tinh: 'Lâm Đồng',  ten: 'Trung Đoàn CSCĐ Số 7 (Tân An, BMT)',  lat: 12.701793, lng: 108.070763 },
  //UBND
///// DAKLAK /////
  //1
  { name: 'UBTDL', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Tỉnh Đắk Lắk', lat: 12.674145, lng: 108.043267, kieu: 'rieng' },
  //2
  { name: 'UBBMT', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Buôn Ma Thuột', lat: 12.684339, lng: 108.050384, kieu: 'rieng' },
  //3
  { name: 'UBTAN', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Tân An', lat: 12.709981, lng: 108.108412, kieu: 'rieng' },
  //4
  { name: 'UBTLA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Tân Lập', lat: 12.685606, lng: 108.093851, kieu: 'rieng' },
  //5
  { name: 'UBTNH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Thành Nhất', lat: 12.643843, lng: 108.004819, kieu: 'rieng' },
  //6
  { name: 'UBEKA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Ea Kao', lat: 12.597778, lng: 108.03507, kieu: 'rieng' },
  //7
  { name: 'UBBHO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Buôn Hồ', lat: 12.915672, lng: 108.265991, kieu: 'rieng' },
  //8
  { name: 'UBCBA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Cư Bao', lat: 12.790181, lng: 108.217825, kieu: 'rieng' },
  //9
  { name: 'UBESU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Súp', lat: 13.066119, lng: 107.885137, kieu: 'rieng' },
  //10
  { name: 'UBERO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Rốk', lat: 13.197353, lng: 107.814755, kieu: 'rieng' },
  //11
  { name: 'UBEBU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Bung', lat: 13.096679, lng: 107.868339, kieu: 'rieng' },
  //12
  { name: 'UBIRV', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ia Rvê', lat: 13.23777, lng: 107.638252, kieu: 'rieng' },
  //13
  { name: 'UBILO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ia Lốp', lat: 13.322076, lng: 107.698527, kieu: 'rieng' },
  //14
  { name: 'UBENI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Ning', lat: 12.609293, lng: 108.209193, kieu: 'rieng' },
  //15
  { name: 'UBDBH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Dray Bhăng', lat: 12.557956, lng: 108.164486, kieu: 'rieng' },
  //16
  { name: 'UBEKT', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Ktur', lat: 12.627999, lng: 108.145928, kieu: 'rieng' },
  //17
  { name: 'UBKAN', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Ana', lat: 12.480338, lng: 108.032488, kieu: 'rieng' },
  //18
  { name: 'UBDKM', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Dur Kmăl', lat: 12.467396, lng: 108.088763, kieu: 'rieng' },
  //19
  { name: 'UBENA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Na', lat: 12.542524, lng: 107.989908, kieu: 'rieng' },
  //20
  { name: 'UBLSL', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Liên Sơn Lắk', lat: 12.410386, lng: 108.176895, kieu: 'rieng' },
  //21
  { name: 'UBDLI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Đắk Liêng', lat: 12.399051, lng: 108.121723, kieu: 'rieng' },
  //22
  { name: 'UBNKA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Nam Ka', lat: 12.292868, lng: 108.024024, kieu: 'rieng' },
  //23
  { name: 'UBDPH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Đắk Phơi', lat: 12.351786, lng: 108.192654, kieu: 'rieng' },
  //24
  { name: 'UBKNO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Nô', lat: 12.197562, lng: 108.129148, kieu: 'rieng' },
  //25
  { name: 'UBHSO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Hòa Sơn', lat: 12.506415, lng: 108.254988, kieu: 'rieng' },
  //26
  { name: 'UBDKA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Dang Kang', lat: 12.572499, lng: 108.334781, kieu: 'rieng' },
  //27
  { name: 'UBKBO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Bông', lat: 12.505034, lng: 108.333322, kieu: 'rieng' },
  //28
  { name: 'UBYMA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Yang Mao', lat: 12.484864, lng: 108.561258, kieu: 'rieng' },
  //29
  { name: 'UBCPU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Cư Pui', lat: 12.508509, lng: 108.502131, kieu: 'rieng' },
  //30
  { name: 'UBKNA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Năng', lat: 12.951732, lng: 108.33949, kieu: 'rieng' },
  //31
  { name: 'UBDLY', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Dliêya', lat: 13.058878, lng: 108.357388, kieu: 'rieng' },
  //32
  { name: 'UBTGI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tam Giang', lat: 13.018494, lng: 108.422746, kieu: 'rieng' },
  //33
  { name: 'UBPXU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Phú Xuân', lat: 12.914194, lng: 108.388449, kieu: 'rieng' },
  //34
  { name: 'UBEDR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Drông', lat: 12.897393, lng: 108.32279, kieu: 'rieng' },
  //35
  { name: 'UBPDR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Pơng Drang', lat: 12.969924, lng: 108.243528, kieu: 'rieng' },
  //36
  { name: 'UBKBU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Búk', lat: 13.04293, lng: 108.219705, kieu: 'rieng' },
  //37
  { name: 'UBCPO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Cư Pơng', lat: 13.009362, lng: 108.150485, kieu: 'rieng' },
  //38
  { name: 'UBEKH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Khăl', lat: 13.135411, lng: 108.228178, kieu: 'rieng' },
  //39
  { name: 'UBEDA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Drăng', lat: 13.205092, lng: 108.21042, kieu: 'rieng' },
  //40
  { name: 'UBEWY', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Wy', lat: 13.211863, lng: 108.062809, kieu: 'rieng' },
  //41
  { name: 'UBEHL', tinh: 'Đắk Lắk', ten: "Ủy Ban Nhân Dân Xã Ea H'Leo", lat: 13.353998, lng: 108.156699, kieu: 'rieng' },
  //42
  { name: 'UBEHI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Hiao', lat: 13.266267, lng: 108.286987, kieu: 'rieng' },
  //43
  { name: 'UBKPA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Pắc', lat: 12.711097, lng: 108.301006, kieu: 'rieng' },
  //44
  { name: 'UBEKN', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Knuếc', lat: 12.709144, lng: 108.210238, kieu: 'rieng' },
  //45
  { name: 'UBTTI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tân Tiến', lat: 12.658598, lng: 108.346286, kieu: 'rieng' },
  //46
  { name: 'UBEPH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Phê', lat: 12.728081, lng: 108.363153, kieu: 'rieng' },
  //47
  { name: 'UBEKL', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Kly', lat: 12.762327, lng: 108.414797, kieu: 'rieng' },
  //48
  { name: 'UBVBO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Vụ Bổn', lat: 12.65888, lng: 108.43171, kieu: 'rieng' },
  //49
  { name: 'UBEKR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Kar', lat: 12.808007, lng: 108.448848, kieu: 'rieng' },
  //50
  { name: 'UBEO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Ô', lat: 12.708237, lng: 108.489505, kieu: 'rieng' },
  //51
  { name: 'UBEKP', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Knốp', lat: 12.80357, lng: 108.541404, kieu: 'rieng' },
  //52
  { name: 'UBCYA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Cư Yang', lat: 12.659759, lng: 108.616238, kieu: 'rieng' },
  //53
  { name: 'UBEPA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Păl', lat: 12.727115, lng: 108.554631, kieu: 'rieng' },
  //54
  { name: 'UBMDR', tinh: 'Đắk Lắk', ten: "Ủy Ban Nhân Dân Xã M'Drắk", lat: 12.747361, lng: 108.742811, kieu: 'rieng' },
  //55
  { name: 'UBERI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Riêng', lat: 12.753939, lng: 108.801959, kieu: 'rieng' },
  //56
  { name: 'UBCMT', tinh: 'Đắk Lắk', ten: "Ủy Ban Nhân Dân Xã Cư M'ta", lat: 12.716872, lng: 108.765528, kieu: 'rieng' },
  //57
  { name: 'UBKAG', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Krông Á', lat: 12.55847, lng: 108.732378, kieu: 'rieng' },
  //58
  { name: 'UBCPR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Cư Prao', lat: 12.899826, lng: 108.684143, kieu: 'rieng' },
  //59
  { name: 'UBETR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Trang', lat: 12.620335, lng: 108.829231, kieu: 'rieng' },
  //60
  { name: 'UBHPH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Hòa Phú', lat: 12.630204, lng: 107.976538, kieu: 'rieng' },
  //61
  { name: 'UBEWE', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Wer', lat: 12.811044, lng: 107.896097, kieu: 'rieng' },
  //62
  { name: 'UBENU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Nuôl', lat: 12.694703, lng: 107.961064, kieu: 'rieng' },
  //63
  { name: 'UBBDO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Buôn Đôn', lat: 12.882581, lng: 107.789828, kieu: 'rieng' },
  //64
  { name: 'UBEKI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Kiết', lat: 12.941202, lng: 108.020513, kieu: 'rieng' },
  //65
  { name: 'UBEMD', tinh: 'Đắk Lắk', ten: "Ủy Ban Nhân Dân Xã Ea M'Dróh", lat: 12.859296, lng: 107.969783, kieu: 'rieng' },
  //66
  { name: 'UBQPH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Quảng Phú', lat: 12.819817, lng: 108.07684, kieu: 'rieng' },
  //67
  { name: 'UBCDA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Cuôr Đăng', lat: 12.753067, lng: 108.168958, kieu: 'rieng' },
  //68
  { name: 'UBCMG', tinh: 'Đắk Lắk', ten: "Ủy Ban Nhân Dân Xã Cư M'gar", lat: 12.852973, lng: 108.104702, kieu: 'rieng' },
  //69
  { name: 'UBETU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Tul', lat: 12.878156, lng: 108.1683, kieu: 'rieng' },
  //70
  { name: 'UBTHO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Tuy Hòa', lat: 13.084415, lng: 109.299688, kieu: 'rieng' },
  //71
  { name: 'UBPYE', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Phú Yên', lat: 13.05168, lng: 109.310385, kieu: 'rieng' },
  //72
  { name: 'UBBKI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Bình Kiến', lat: 13.125921, lng: 109.279048, kieu: 'rieng' },
  //73
  { name: 'UBXDA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Xuân Đài', lat: 13.397293, lng: 109.213052, kieu: 'rieng' },
  //74
  { name: 'UBSCA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Sông Cầu', lat: 13.455794, lng: 109.222776, kieu: 'rieng' },
  //75
  { name: 'UBDHO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Đông Hòa', lat: 12.992773, lng: 109.329874, kieu: 'rieng' },
  //76
  { name: 'UBHHI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Phường Hòa Hiệp', lat: 12.995531, lng: 109.364636, kieu: 'rieng' },
  //77
  { name: 'UBXTH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Xuân Thọ', lat: 13.416459, lng: 109.213599, kieu: 'rieng' },
  //78
  { name: 'UBXCA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Xuân Cảnh', lat: 13.577534, lng: 109.20524, kieu: 'rieng' },
  //79
  { name: 'UBXLO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Xuân Lộc', lat: 13.59095, lng: 109.196563, kieu: 'rieng' },
  //80
  { name: 'UBHXU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Hòa Xuân', lat: 12.96478, lng: 109.347494, kieu: 'rieng' },
  //81
  { name: 'UBTAB', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tuy An Bắc', lat: 13.30852, lng: 109.215362, kieu: 'rieng' },
  //82
  { name: 'UBTAD', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tuy An Đông', lat: 13.341443, lng: 109.251026, kieu: 'rieng' },
  //83
  { name: 'UBOLO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ô Loan', lat: 13.230342, lng: 109.284694, kieu: 'rieng' },
  //84
  { name: 'UBTAM', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tuy An Nam', lat: 13.20401, lng: 109.274183, kieu: 'rieng' },
  //85
  { name: 'UBTAT', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tuy An Tây', lat: 13.302125, lng: 109.161027, kieu: 'rieng' },
  //86
  { name: 'UBPH1', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Phú Hòa 1', lat: 13.022836, lng: 109.208477, kieu: 'rieng' },
  //87
  { name: 'UBPH2', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Phú Hòa 2', lat: 13.080491, lng: 109.214747, kieu: 'rieng' },
  //88
  { name: 'UBTHA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tây Hòa', lat: 12.999772, lng: 109.237746, kieu: 'rieng' },
  //89
  { name: 'UBHTH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Hòa Thịnh', lat: 12.983925, lng: 109.231445, kieu: 'rieng' },
  //90
  { name: 'UBHMY', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Hòa Mỹ', lat: 12.964654, lng: 109.213342, kieu: 'rieng' },
  //91
  { name: 'UBSTH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Sơn Thành', lat: 12.983273, lng: 109.096469, kieu: 'rieng' },
  //92
  { name: 'UBSHO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Sơn Hòa', lat: 13.051053, lng: 108.974694, kieu: 'rieng' },
  //93
  { name: 'UBVHO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Vân Hòa', lat: 13.195299, lng: 109.108669, kieu: 'rieng' },
  //94
  { name: 'UBTSO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Tây Sơn', lat: 13.909652, lng: 108.918721, kieu: 'rieng' },
  //95
  { name: 'UBSTR', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Suối Trai', lat: 13.094616, lng: 108.889908, kieu: 'rieng' },
  //96
  { name: 'UBELY', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Ly', lat: 12.979395, lng: 108.76763, kieu: 'rieng' },
  //97
  { name: 'UBEBA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Ea Bá', lat: 12.973017, lng: 108.806593, kieu: 'rieng' },
  //98
  { name: 'UBDBI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Đức Bình', lat: 13.019896, lng: 108.960185, kieu: 'rieng' },
  //99
  { name: 'UBSHI', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Sông Hinh', lat: 12.978984, lng: 108.89766, kieu: 'rieng' },
  //100
  { name: 'UBXLA', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Xuân Lãnh', lat: 13.488943, lng: 109.030567, kieu: 'rieng' },
  //101
  { name: 'UBPMO', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Phú Mỡ', lat: 13.356195, lng: 108.982581, kieu: 'rieng' },
  //102
  { name: 'UBXPH', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Xuân Phước', lat: 13.297364, lng: 109.064888, kieu: 'rieng' },
  //103
  { name: 'UBDXU', tinh: 'Đắk Lắk', ten: 'Ủy Ban Nhân Dân Xã Đồng Xuân', lat: 13.378405, lng: 109.10447, kieu: 'rieng' },
 
//////////////// LÂM ĐỒNG ////////////////

  //1
  { name: 'UBTLD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Tỉnh Lâm Đồng', lat: 11.936171, lng: 108.443455, kieu: 'rieng' },
  //2
  { name: 'UBPXHD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Xuân Hương - Đà Lạt', lat: 11.952605, lng: 108.442056, kieu: 'rieng' },
  //3
  { name: 'UBPCLD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Cam Ly - Đà Lạt', lat: 11.949459, lng: 108.43178, kieu: 'rieng' },
  //4
  { name: 'UBPLVD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Lâm Viên - Đà Lạt', lat: 11.945846, lng: 108.457586, kieu: 'rieng' },
  //5
  { name: 'UBPXTD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Xuân Trường - Đà Lạt', lat: 11.942832, lng: 108.520779, kieu: 'rieng' },
  //6
  { name: 'UBPLBD', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Lang Biang - Đà Lạt', lat: 12.009554, lng: 108.426187, kieu: 'rieng' },
  //7
  { name: 'UBP1BL', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường 1 Bảo Lộc', lat: 11.552136, lng: 107.808866, kieu: 'rieng' },
  //8
  { name: 'UBP2BL', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường 2 Bảo Lộc', lat: 11.587084, lng: 107.79214, kieu: 'rieng' },
  //9
  { name: 'UBP3BL', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường 3 Bảo Lộc', lat: 11.529504, lng: 107.775678, kieu: 'rieng' },
  //10
  { name: 'UBPBLO', tinh: 'Lâm Đồng', ten: "Ủy Ban Nhân Dân Phường B'Lao", lat: 11.534214, lng: 107.82096, kieu: 'rieng' },
  //11
  { name: 'UBPHTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Hàm Thắng', lat: 10.967331, lng: 108.130615, kieu: 'rieng' },
  //12
  { name: 'UBPBTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Bình Thuận', lat: 10.937624, lng: 108.087858, kieu: 'rieng' },
  //13
  { name: 'UBPMNE', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Mũi Né', lat: 10.982179, lng: 108.251246, kieu: 'rieng' },
  //14
  { name: 'UBPPTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Phú Thủy', lat: 10.940149, lng: 108.120824, kieu: 'rieng' },
  //15
  { name: 'UBPPTH2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Phan Thiết', lat: 10.923962, lng: 108.098034, kieu: 'rieng' },
  //16
  { name: 'UBPTTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Tiến Thành', lat: 10.919266, lng: 108.084466, kieu: 'rieng' },
  //17
  { name: 'UBPLGI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường La Gi', lat: 10.688079, lng: 107.756447, kieu: 'rieng' },
  //18
  { name: 'UBPPHO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Phước Hội', lat: 10.658796, lng: 107.77473, kieu: 'rieng' },
  //19
  { name: 'UBPBGN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Bắc Gia Nghĩa', lat: 12.011289, lng: 107.711954, kieu: 'rieng' },
  //20
  { name: 'UBPNGN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Nam Gia Nghĩa', lat: 11.996074, lng: 107.677393, kieu: 'rieng' },
  //21
  { name: 'UBPDGN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Phường Đông Gia Nghĩa', lat: 11.999537, lng: 107.693738, kieu: 'rieng' },
  //22
  { name: 'UBXLDU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Lạc Dương', lat: 12.104547, lng: 108.553632, kieu: 'rieng' },
  //23
  { name: 'UBXDDN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đơn Dương', lat: 11.761513, lng: 108.494795, kieu: 'rieng' },
  //24
  { name: 'UBXKDO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Ka Đô', lat: 11.757518, lng: 108.530265, kieu: 'rieng' },
  //25
  { name: 'UBXQLP', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Lập', lat: 11.726211, lng: 108.536374, kieu: 'rieng' },
  //26
  { name: 'UBXDRA', tinh: 'Lâm Đồng', ten: "Ủy Ban Nhân Dân Xã D'Ran", lat: 11.821666, lng: 108.56948, kieu: 'rieng' },
  //27
  { name: 'UBXHTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hiệp Thạnh', lat: 11.785222, lng: 108.414031, kieu: 'rieng' },
  //28
  { name: 'UBXDTR', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đức Trọng', lat: 11.735692, lng: 108.373565, kieu: 'rieng' },
  //29
  { name: 'UBXTHO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Hội', lat: 11.715227, lng: 108.293144, kieu: 'rieng' },
  //30
  { name: 'UBXTHI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tà Hine', lat: 11.588154, lng: 108.34455, kieu: 'rieng' },
  //31
  { name: 'UBXTNA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tà Năng', lat: 11.567839, lng: 108.444811, kieu: 'rieng' },
  //32
  { name: 'UBXDLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đinh Văn Lâm Hà', lat: 11.786806, lng: 108.242912, kieu: 'rieng' },
  //33
  { name: 'UBXPLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Phú Sơn Lâm Hà', lat: 11.809776, lng: 108.22372, kieu: 'rieng' },
  //34
  { name: 'UBXNLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nam Hà Lâm Hà', lat: 11.865787, lng: 108.260245, kieu: 'rieng' },
  //35
  { name: 'UBXBLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nam Ban Lâm Hà', lat: 11.824706, lng: 108.337707, kieu: 'rieng' },
  //36
  { name: 'UBXTLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Hà Lâm Hà', lat: 11.747809, lng: 108.200665, kieu: 'rieng' },
  //37
  { name: 'UBXFLH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Phúc Thọ Lâm Hà', lat: 11.750736, lng: 108.103639, kieu: 'rieng' },
  //38
  { name: 'UBXDR1', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đam Rông 1', lat: 11.939352, lng: 108.136048, kieu: 'rieng' },
  //39
  { name: 'UBXDR2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đam Rông 2', lat: 12.064527, lng: 108.144873, kieu: 'rieng' },
  //40
  { name: 'UBXDR3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đam Rông 3', lat: 12.177006, lng: 108.134297, kieu: 'rieng' },
  //41
  { name: 'UBXDR4', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đam Rông 4', lat: 12.151018, lng: 108.257208, kieu: 'rieng' },
  //42
  { name: 'UBXDLI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Di Linh', lat: 11.578035, lng: 108.074523, kieu: 'rieng' },
  //43
  { name: 'UBXHNI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hòa Ninh', lat: 11.527816, lng: 107.933927, kieu: 'rieng' },
  //44
  { name: 'UBXHBA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hòa Bắc', lat: 11.455467, lng: 107.900208, kieu: 'rieng' },
  //45
  { name: 'UBXDTU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đinh Trang Thượng', lat: 11.662949, lng: 107.966705, kieu: 'rieng' },
  //46
  { name: 'UBXBTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Thuận', lat: 11.611101, lng: 108.115872, kieu: 'rieng' },
  //47
  { name: 'UBXSDI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Sơn Điền', lat: 11.344415, lng: 108.086288, kieu: 'rieng' },
  //48
  { name: 'UBXGHI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Gia Hiệp', lat: 11.62603, lng: 108.176919, kieu: 'rieng' },
  //49
  { name: 'UBXBL1', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Lâm 1', lat: 11.628151, lng: 107.835671, kieu: 'rieng' },
  //50
  { name: 'UBXBL2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Lâm 2', lat: 11.546234, lng: 107.899714, kieu: 'rieng' },
  //51
  { name: 'UBXBL3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Lâm 3', lat: 11.415428, lng: 107.863708, kieu: 'rieng' },
  //52
  { name: 'UBXBL4', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Lâm 4', lat: 11.701828, lng: 107.793343, kieu: 'rieng' },
  //53
  { name: 'UBXBL5', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bảo Lâm 5', lat: 11.742582, lng: 107.657196, kieu: 'rieng' },
  //54
  { name: 'UBXDHO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Huoai', lat: 11.386843, lng: 107.534719, kieu: 'rieng' },
  //55
  { name: 'UBXDH2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Huoai 2', lat: 11.41026, lng: 107.629876, kieu: 'rieng' },
  //56
  { name: 'UBXDTE', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Tẻh', lat: 11.510957, lng: 107.491036, kieu: 'rieng' },
  //57
  { name: 'UBXDT2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Tẻh 2', lat: 11.530567, lng: 107.526678, kieu: 'rieng' },
  //58
  { name: 'UBXDT3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Tẻh 3', lat: 11.546832, lng: 107.518247, kieu: 'rieng' },
  //59
  { name: 'UBXCTI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Cát Tiên', lat: 11.566032, lng: 107.3678, kieu: 'rieng' },
  //60
  { name: 'UBXCT2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Cát Tiên 2', lat: 11.564622, lng: 107.312882, kieu: 'rieng' },
  //61
  { name: 'UBXCT3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Cát Tiên 3', lat: 11.653826, lng: 107.388626, kieu: 'rieng' },
  //62
  { name: 'UBXVHA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Vĩnh Hảo', lat: 11.311919, lng: 108.755575, kieu: 'rieng' },
  //63
  { name: 'UBXLHU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Liên Hương', lat: 11.228412, lng: 108.723505, kieu: 'rieng' },
  //64
  { name: 'UBXTPO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tuy Phong', lat: 11.268178, lng: 108.649136, kieu: 'rieng' },
  //65
  { name: 'UBXPRC', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Phan Rí Cửa', lat: 11.174137, lng: 108.566096, kieu: 'rieng' },
  //66
  { name: 'UBXBBI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bắc Bình', lat: 11.221338, lng: 108.509056, kieu: 'rieng' },
  //67
  { name: 'UBXHTI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hồng Thái', lat: 11.220318, lng: 108.469057, kieu: 'rieng' },
  //68
  { name: 'UBXHNI2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hải Ninh', lat: 11.249064, lng: 108.504727, kieu: 'rieng' },
  //69
  { name: 'UBXPSO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Phan Sơn', lat: 11.416567, lng: 108.355874, kieu: 'rieng' },
  //70
  { name: 'UBXSLU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Sông Lũy', lat: 11.209692, lng: 108.321397, kieu: 'rieng' },
  //71
  { name: 'UBXLSO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Lương Sơn', lat: 11.19203, lng: 108.363352, kieu: 'rieng' },
  //72
  { name: 'UBXHTA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hòa Thắng', lat: 11.042036, lng: 108.390422, kieu: 'rieng' },
  //73
  { name: 'UBXDGI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đông Giang', lat: 11.225201, lng: 107.971839, kieu: 'rieng' },
  //74
  { name: 'UBXLDA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã La Dạ', lat: 11.211806, lng: 107.90128, kieu: 'rieng' },
  //75
  { name: 'UBXHTB', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Thuận Bắc', lat: 11.197516, lng: 108.159039, kieu: 'rieng' },
  //76
  { name: 'UBXHTH2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Thuận', lat: 11.072315, lng: 108.130103, kieu: 'rieng' },
  //77
  { name: 'UBXHSO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hồng Sơn', lat: 11.088578, lng: 108.188327, kieu: 'rieng' },
  //78
  { name: 'UBXHLI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Liêm', lat: 10.972166, lng: 108.081841, kieu: 'rieng' },
  //79
  { name: 'UBXTQU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tuyên Quang', lat: 10.922747, lng: 108.072755, kieu: 'rieng' },
  //80
  { name: 'UBXHTH3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Thạnh', lat: 10.987799, lng: 107.961615, kieu: 'rieng' },
  //81
  { name: 'UBXHKI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Kiệm', lat: 10.920762, lng: 108.000538, kieu: 'rieng' },
  //82
  { name: 'UBXTTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Thành', lat: 12.43249, lng: 107.813643, kieu: 'rieng' },
  //83
  { name: 'UBXHTN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Thuận Nam', lat: 10.849922, lng: 107.878722, kieu: 'rieng' },
  //84
  { name: 'UBXTLA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Lập', lat: 10.843614, lng: 107.819297, kieu: 'rieng' },
  //85
  { name: 'UBXTMI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Minh', lat: 10.841098, lng: 107.635666, kieu: 'rieng' },
  //86
  { name: 'UBXHTA2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hàm Tân', lat: 10.818487, lng: 107.722108, kieu: 'rieng' },
  //87
  { name: 'UBXSMY', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Sơn Mỹ', lat: 10.659631, lng: 107.691649, kieu: 'rieng' },
  //88
  { name: 'UBXTHA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tân Hải', lat: 10.710263, lng: 107.827681, kieu: 'rieng' },
  //89
  { name: 'UBXNDU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nghị Đức', lat: 11.226511, lng: 107.67092, kieu: 'rieng' },
  //90
  { name: 'UBXBRU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Bắc Ruộng', lat: 11.204236, lng: 107.704027, kieu: 'rieng' },
  //91
  { name: 'UBXDKH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đồng Kho', lat: 11.142388, lng: 107.723843, kieu: 'rieng' },
  //92
  { name: 'UBXTLI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tánh Linh', lat: 11.084018, lng: 107.680747, kieu: 'rieng' },
  //93
  { name: 'UBXSKI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Suối Kiết', lat: 10.953982, lng: 107.650783, kieu: 'rieng' },
  //94
  { name: 'UBXNTH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nam Thành', lat: 11.246323, lng: 107.592807, kieu: 'rieng' },
  //95
  { name: 'UBXDLI2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đức Linh', lat: 11.186336, lng: 107.560209, kieu: 'rieng' },
  //96
  { name: 'UBXHDU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Hoài Đức', lat: 11.15199, lng: 107.501643, kieu: 'rieng' },
  //97
  { name: 'UBXTTA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Trà Tân', lat: 11.063747, lng: 107.475498, kieu: 'rieng' },
  //98
  { name: 'UBXDWI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đắk Wil', lat: 12.700142, lng: 107.826936, kieu: 'rieng' },
  //99
  { name: 'UBXNDO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nam Dong', lat: 12.650088, lng: 107.873582, kieu: 'rieng' },
  //100
  { name: 'UBXCJU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Cư Jút', lat: 12.588478, lng: 107.895505, kieu: 'rieng' },
  //101
  { name: 'UBXTAN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Thuận An', lat: 12.411765, lng: 107.580348, kieu: 'rieng' },
  //102
  { name: 'UBXDLA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đức Lập', lat: 12.448678, lng: 107.621511, kieu: 'rieng' },
  //103
  { name: 'UBXDMI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đắk Mil', lat: 12.494525, lng: 107.740272, kieu: 'rieng' },
  //104
  { name: 'UBXDSA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đắk Sắk', lat: 12.431212, lng: 107.67051, kieu: 'rieng' },
  //105
  { name: 'UBXNDA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nam Đà', lat: 12.47994, lng: 107.867466, kieu: 'rieng' },
  //106
  { name: 'UBXKNO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Krông Nô', lat: 12.457193, lng: 107.86082, kieu: 'rieng' },
  //107
  { name: 'UBXNNU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nâm Nung', lat: 12.391449, lng: 107.881774, kieu: 'rieng' },
  //108
  { name: 'UBXQPH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Phú', lat: 12.341304, lng: 107.930974, kieu: 'rieng' },
  //109
  { name: 'UBXDSO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đắk Song', lat: 12.401627, lng: 107.646167, kieu: 'rieng' },
  //110
  { name: 'UBXDAN', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đức An', lat: 12.255375, lng: 107.609619, kieu: 'rieng' },
  //111
  { name: 'UBXTHA2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Thuận Hạnh', lat: 12.243544, lng: 107.532999, kieu: 'rieng' },
  //112
  { name: 'UBXTXU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Trường Xuân', lat: 12.114368, lng: 107.656781, kieu: 'rieng' },
  //113
  { name: 'UBXTDU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tà Đùng', lat: 11.874668, lng: 107.926128, kieu: 'rieng' },
  //114
  { name: 'UBXQKH', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Khê', lat: 11.910637, lng: 107.799924, kieu: 'rieng' },
  //115
  { name: 'UBXQTA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Tân', lat: 12.04191, lng: 107.490746, kieu: 'rieng' },
  //116
  { name: 'UBXTDU2', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Tuy Đức', lat: 12.220005, lng: 107.474158, kieu: 'rieng' },
  //117
  { name: 'UBXKDU', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Kiến Đức', lat: 12.006793, lng: 107.512513, kieu: 'rieng' },
  //118
  { name: 'UBXQTR', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Trực', lat: 12.264007, lng: 107.378648, kieu: 'rieng' },
  //119
  { name: 'UBXNCO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Nhân Cơ', lat: 12.012263, lng: 107.566423, kieu: 'rieng' },
  //120
  { name: 'UBXQTI', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Tín', lat: 11.868662, lng: 107.493638, kieu: 'rieng' },
  //121
  { name: 'UBXNGA', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Ninh Gia', lat: 11.63451, lng: 108.304185, kieu: 'rieng' },
  //122
  { name: 'UBXQHO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Hòa', lat: 12.180228, lng: 108.105316, kieu: 'rieng' },
  //123
  { name: 'UBXQSO', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Quảng Sơn', lat: 12.155304, lng: 107.872478, kieu: 'rieng' },
  //124
  { name: 'UBXDH3', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Xã Đạ Huoai 3', lat: 11.372094, lng: 107.662359, kieu: 'rieng' },
  //125
  { name: 'UBDKPQ', tinh: 'Lâm Đồng', ten: 'Ủy Ban Nhân Dân Đặc Khu Phú Quý', lat: 10.516474, lng: 108.932543, kieu: 'rieng' },


///// KHÁNH HÒA //// 
//1
  { name: 'UBTKH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Tỉnh Khánh Hòa', lat: 12.254913, lng: 109.195975, kieu: 'rieng' },
  //2
  { name: 'UBPNT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Nha Trang', lat: 12.243772, lng: 109.192729, kieu: 'rieng' },
  //3
  { name: 'UBPBNT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Bắc Nha Trang', lat: 12.281028, lng: 109.194131, kieu: 'rieng' },
  //4
  { name: 'UBPTNT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Tây Nha Trang', lat: 12.267616, lng: 109.162430, kieu: 'rieng' },
  //5
  { name: 'UBPNNT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Nam Nha Trang', lat: 12.235452, lng: 109.166252, kieu: 'rieng' },
  //6
  { name: 'UBPBCR', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Bắc Cam Ranh', lat: 11.959487, lng: 109.189273, kieu: 'rieng' },
  //7
  { name: 'UBPCR', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Cam Ranh', lat: 11.926961, lng: 109.160850, kieu: 'rieng' },
  //8
  { name: 'UBPCL', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Cam Linh', lat: 11.910866, lng: 109.148793, kieu: 'rieng' },
  //9
  { name: 'UBPBN', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Ba Ngòi', lat: 11.911848, lng: 109.130731, kieu: 'rieng' },
  //10
  { name: 'UBPNH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Ninh Hòa', lat: 12.491274, lng: 109.125440, kieu: 'rieng' },
  //11
  { name: 'UBPDNH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Đông Ninh Hòa', lat: 12.537674, lng: 109.213412, kieu: 'rieng' },
  //12
  { name: 'UBPHTH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Hòa Thắng', lat: 12.480245, lng: 109.131880, kieu: 'rieng' },
  //13
  { name: 'UBPPR', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Phan Rang', lat: 11.567958, lng: 108.989377, kieu: 'rieng' },
  //14
  { name: 'UBPDH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Đông Hải', lat: 11.562281, lng: 109.013014, kieu: 'rieng' },
  //15
  { name: 'UBPNC', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Ninh Chử', lat: 11.590966, lng: 109.043624, kieu: 'rieng' },
  //16
  { name: 'UBPBA', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Bảo An', lat: 11.577557, lng: 108.978772, kieu: 'rieng' },
  //17
  { name: 'UBPDV', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Phường Đô Vinh', lat: 11.595339, lng: 108.950565, kieu: 'rieng' },
  //18
  { name: 'UBXNCR', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Nam Cam Ranh', lat: 11.879826, lng: 109.110693, kieu: 'rieng' },
  //19
  { name: 'UBXBNH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Bắc Ninh Hòa', lat: 12.557026, lng: 109.177849, kieu: 'rieng' },
  //20
  { name: 'UBXTD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Tân Định', lat: 12.484338, lng: 109.113839, kieu: 'rieng' },
  //21
  { name: 'UBXNNH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Nam Ninh Hòa', lat: 12.462618, lng: 109.099827, kieu: 'rieng' },
  //22
  { name: 'UBXTNH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Tây Ninh Hòa', lat: 12.538159, lng: 109.016483, kieu: 'rieng' },
  //23
  { name: 'UBXHT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Hòa Trí', lat: 12.543406, lng: 109.122666, kieu: 'rieng' },
  //24
  { name: 'UBXDL', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Đại Lãnh', lat: 12.803313, lng: 109.333563, kieu: 'rieng' },
  //25
  { name: 'UBXTB', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Tu Bông', lat: 12.778714, lng: 109.305903, kieu: 'rieng' },
  //26
  { name: 'UBXVTH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Vạn Thắng', lat: 12.704769, lng: 109.237042, kieu: 'rieng' },
  //27
  { name: 'UBXVN', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Vạn Ninh', lat: 12.691647, lng: 109.221164, kieu: 'rieng' },
  //28
  { name: 'UBXVH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Vạn Hưng', lat: 12.630130, lng: 109.186677, kieu: 'rieng' },
  //29
  { name: 'UBXDK', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Diên Khánh', lat: 12.255363, lng: 109.093367, kieu: 'rieng' },
  //30
  { name: 'UBXDLA', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Diên Lạc', lat: 12.259419, lng: 109.072329, kieu: 'rieng' },
  //31
  { name: 'UBXDD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Diên Điền', lat: 12.276324, lng: 109.105333, kieu: 'rieng' },
  //32
  { name: 'UBXDLM', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Diên Lâm', lat: 12.314860, lng: 108.979870, kieu: 'rieng' },
  //33
  { name: 'UBXDT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Diên Thọ', lat: 12.264981, lng: 109.028161, kieu: 'rieng' },
  //34
  { name: 'UBXSH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Suối Hiệp', lat: 12.218330, lng: 109.080183, kieu: 'rieng' },
  //35
  { name: 'UBXCL', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Cam Lâm', lat: 12.071251, lng: 109.169303, kieu: 'rieng' },
  //36
  { name: 'UBXSD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Suối Dầu', lat: 12.188049, lng: 109.066605, kieu: 'rieng' },
  //37
  { name: 'UBXCH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Cam Hiệp', lat: 12.122473, lng: 109.106251, kieu: 'rieng' },
  //38
  { name: 'UBXCA', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Cam An', lat: 12.016305, lng: 109.109415, kieu: 'rieng' },
  //39
  { name: 'UBXBKV', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Bắc Khánh Vĩnh', lat: 12.364300, lng: 108.956355, kieu: 'rieng' },
  //40
  { name: 'UBXTKV', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Trung Khánh Vĩnh', lat: 12.385759, lng: 108.922117, kieu: 'rieng' },
  //41
  { name: 'UBXTKV2', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Tây Khánh Vĩnh', lat: 12.269802, lng: 108.808901, kieu: 'rieng' },
  //42
  { name: 'UBXNKV', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Nam Khánh Vĩnh', lat: 12.251057, lng: 108.812817, kieu: 'rieng' },
  //43
  { name: 'UBXKV', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Khánh Vĩnh', lat: 12.284408, lng: 108.905819, kieu: 'rieng' },
  //44
  { name: 'UBXKS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Khánh Sơn', lat: 12.005741, lng: 108.948367, kieu: 'rieng' },
  //45
  { name: 'UBXTKS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Tây Khánh Sơn', lat: 12.029135, lng: 108.867525, kieu: 'rieng' },
  //46
  { name: 'UBXDKS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Đông Khánh Sơn', lat: 11.982933, lng: 108.983500, kieu: 'rieng' },
  //47
  { name: 'UBXNP', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Ninh Phước', lat: 11.526072, lng: 108.926254, kieu: 'rieng' },
  //48
  { name: 'UBXPHU', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Phước Hữu', lat: 11.523874, lng: 108.910829, kieu: 'rieng' },
  //49
  { name: 'UBXPH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Phước Hậu', lat: 11.614972, lng: 108.899833, kieu: 'rieng' },
  //50
  { name: 'UBXTN', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Thuận Nam', lat: 11.476655, lng: 108.911517, kieu: 'rieng' },
  //51
  { name: 'UBXCN', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Cà Ná', lat: 11.337960, lng: 108.891253, kieu: 'rieng' },
  //52
  { name: 'UBXPHE', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Phước Hà', lat: 11.483988, lng: 108.844155, kieu: 'rieng' },
  //53
  { name: 'UBXPD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Phước Dinh', lat: 11.543534, lng: 108.995545, kieu: 'rieng' },
  //54
  { name: 'UBXNHI', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Ninh Hải', lat: 11.638052, lng: 109.048941, kieu: 'rieng' },
  //55
  { name: 'UBXXH', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Xuân Hải', lat: 11.637257, lng: 109.005937, kieu: 'rieng' },
  //56
  { name: 'UBXVHI', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Vĩnh Hải', lat: 11.664239, lng: 109.170965, kieu: 'rieng' },
  //57
  { name: 'UBXTB2', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Thuận Bắc', lat: 11.716354, lng: 109.061174, kieu: 'rieng' },
  //58
  { name: 'UBXCH2', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Công Hải', lat: 11.781226, lng: 109.072707, kieu: 'rieng' },
  //59
  { name: 'UBXNS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Ninh Sơn', lat: 11.775978, lng: 108.785460, kieu: 'rieng' },
  //60
  { name: 'UBXLS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Lâm Sơn', lat: 11.828494, lng: 108.696628, kieu: 'rieng' },
  //61
  { name: 'UBXAD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Anh Dũng', lat: 11.656970, lng: 108.693500, kieu: 'rieng' },
  //62
  { name: 'UBXMS', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Mỹ Sơn', lat: 11.671976, lng: 108.863638, kieu: 'rieng' },
  //63
  { name: 'UBXBAD', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Bác Ái Đông', lat: 11.841470, lng: 108.903765, kieu: 'rieng' },
  //64
  { name: 'UBXBA', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Bác Ái', lat: 11.822430, lng: 108.869550, kieu: 'rieng' },
  //65
  { name: 'UBXBAT', tinh: 'Khánh Hòa', ten: 'Ủy Ban Nhân Dân Xã Bác Ái Tây', lat: 11.858402, lng: 108.772048, kieu: 'rieng' },

///// KHU CÔNG NGHIỆP (chấm xanh, hiện trong menu "Lớp") /////
  // ================= ĐẮK LẮK =================
  // 1
  { name: 'KCNHPH', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp Hòa Phú', lat: 12.600170, lng: 107.940734, kieu: 'kcn' },
  // 2
  { name: 'KCNPXU', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp Phú Xuân', lat: 12.777273, lng: 108.168387, kieu: 'kcn' },
  // 3
  { name: 'KCNHHI', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp Hòa Hiệp', lat: 13.014102, lng: 109.358873, kieu: 'kcn' },
  // 4
  { name: 'KCNDB1', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp Đông Bắc Sông Cầu KV1', lat: 13.592235, lng: 109.248862, kieu: 'kcn' },
  // 5
  { name: 'KCNDB2', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp Đông Bắc Sông Cầu KV2', lat: 13.619202, lng: 109.232869, kieu: 'kcn' },
  // 6
  { name: 'KCNAPH', tinh: 'Đắk Lắk', ten: 'Khu công nghiệp An Phú', lat: 13.127278, lng: 109.285255, kieu: 'kcn' },
  // 7
  { name: 'KCNTAN', tinh: 'Đắk Lắk', ten: 'Cụm công nghiệp Tân An', lat: 12.733482, lng: 108.081956, kieu: 'ccn' },
  // 8
  { name: 'KCNEDA', tinh: 'Đắk Lắk', ten: 'Cụm công nghiệp Ea Đar', lat: 12.812839, lng: 108.499896, kieu: 'ccn' },
  // 9
  { name: 'KCNCKU', tinh: 'Đắk Lắk', ten: 'Cụm công nghiệp Cư Kuin', lat: 12.571162, lng: 108.120651, kieu: 'ccn' },

  // ================= KHÁNH HÒA =================
  // 10
  { name: 'KCNSDA', tinh: 'Khánh Hòa', ten: 'Khu công nghiệp Suối Dầu', lat: 12.157165, lng: 109.074233, kieu: 'kcn' },
  // 11
  { name: 'KCNDPH', tinh: 'Khánh Hòa', ten: 'Cụm công nghiệp Diên Phú', lat: 12.280079, lng: 109.124930, kieu: 'ccn' },
  // 12
  { name: 'KCNDLO', tinh: 'Khánh Hòa', ten: 'Khu công nghiệp Du Long', lat: 11.692472, lng: 109.051302, kieu: 'kcn' },
  // 13
  { name: 'KCNPNA', tinh: 'Khánh Hòa', ten: 'Khu công nghiệp Phước Nam', lat: 11.457854, lng: 108.897635, kieu: 'kcn' },
  // 14
  { name: 'KCNTHA', tinh: 'Khánh Hòa', ten: 'Khu công nghiệp Thành Hải', lat: 11.604016, lng: 108.992118, kieu: 'kcn' },
  // 15
  { name: 'KCNDLA', tinh: 'Khánh Hòa', ten: 'Cụm công nghiệp Đắc Lộc', lat: 12.301773, lng: 109.162272, kieu: 'ccn' },
  // 16
  { name: 'KCNSCA', tinh: 'Khánh Hòa', ten: 'Cụm công nghiệp Sông Cầu', lat: 12.267707, lng: 108.947664, kieu: 'ccn' },

  // ================= LÂM ĐỒNG =================
  // 17
  { name: 'KCNPHO', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Phú Hội', lat: 11.695015, lng: 108.377246, kieu: 'kcn' },
  // 18
  { name: 'KCNLSO', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Lộc Sơn', lat: 11.518112, lng: 107.834426, kieu: 'kcn' },
  // 19
  { name: 'KCNTTH', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Tâm Thắng', lat: 12.608400, lng: 107.920396, kieu: 'kcn' },
  // 20
  { name: 'KCNNCO', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Nhân Cơ', lat: 11.971472, lng: 107.603505, kieu: 'kcn' },
  // 21
  { name: 'KCNPTH', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Phan Thiết', lat: 10.954146, lng: 108.102425, kieu: 'kcn' },
  // 22
  { name: 'KCNHK1', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Hàm Kiệm 1', lat: 10.923955, lng: 108.017506, kieu: 'kcn' },
  // 23
  { name: 'KCNHK2', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Hàm Kiệm 2', lat: 10.928971, lng: 108.001500, kieu: 'kcn' },
  // 24
  { name: 'KCNSBI', tinh: 'Lâm Đồng', ten: 'Khu công nghiệp Sông Bình', lat: 11.272086, lng: 108.354549, kieu: 'kcn' },
  // 25
  { name: 'KCNTHU', tinh: 'Lâm Đồng', ten: 'Cụm công nghiệp Thuận An', lat: 12.427663, lng: 107.584102, kieu: 'ccn' },
  // 26
  { name: 'KCNNHA', tinh: 'Lâm Đồng', ten: 'Cụm công nghiệp Nam Hà', lat: 11.022070, lng: 107.504112, kieu: 'ccn' },
  // 27
  { name: 'KCNTB1', tinh: 'Lâm Đồng', ten: 'Cụm công nghiệp Tân Bình 1', lat: 10.723295, lng: 107.782437, kieu: 'ccn' }


];
