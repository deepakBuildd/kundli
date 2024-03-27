function map() {
  var a = "^[0-9]";
  if (-1 == String(document.getElementById("lat").value).search(a))
    window.open(
      "http://www.geonames.org/search.html?q=" +
        document.getElementById("lat").value
    );
  else {
    var t = "http://www.openstreetmap.org/?",
      e = document
        .getElementById("lat")
        .value.replace(/\s+/g, "")
        .toUpperCase();
    if (-1 != e.indexOf("N")) {
      lattmp = e.split("N");
      var i = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0));
    } else if (-1 != e.indexOf("S")) {
      lattmp = e.split("S");
      var i = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0));
    }
    var e = document
      .getElementById("lon")
      .value.replace(/\s+/g, "")
      .toUpperCase();
    if (-1 != e.indexOf("W")) {
      lontmp = e.split("W");
      var s = -dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0));
    } else if (-1 != e.indexOf("E")) {
      lontmp = e.split("E");
      var s = dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0));
    }
    var r = "&zoom=13",
      n = t + "lat=" + i + "&lon=" + s + r;
    window.open(n);
  }
}
function generate() {
  parse_input_data(), calc_position(!1), draw(!1);
}
function parse_input_data() {
  (name = document.getElementById("name").value),
    parse_date(document.getElementById("date").value),
    parse_time(document.getElementById("time").value),
    (tz = document.getElementById("tz").value),
    parse_latitude(document.getElementById("lat").value.toUpperCase()),
    parse_longitude(document.getElementById("lon").value.toUpperCase());
}
function parse_date(a) {
  (date = 0), (date = new Date(a));
}
function parse_time(a) {
  (time = 0), (time = new Date());
  var t = a.replace(/\s+/g, "");
  (t = t.match(/(\d{1,2})(:(\d\d))/)),
    t[1] < 10 && (t[1] = parseInt(t[1], 10)),
    t[3] < 10 && (t[3] = parseInt(t[3], 10)),
    time.setHours(parseInt(t[1]) + (parseInt(t[1]) < 12 && t[4] ? 12 : 0)),
    time.setMinutes(parseInt(t[3]) || 0),
    time.setSeconds(parseInt(0)),
    (parseInt(t[1]) >= 24 ||
      parseInt(t[3]) > 59 ||
      (0 == parseInt(t[1]) && 0 == parseInt(t[3]))) &&
      (time.setHours(parseInt(0)),
      time.setMinutes(parseInt(1)),
      (document.getElementById("time").value = "00:01"));
}
function parse_latitude(a) {
  var t = a.replace(/\s+/g, "");
  -1 != t.indexOf("N")
    ? ((lattmp = t.split("N")),
      (lat = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0))))
    : -1 != t.indexOf("S") &&
      ((lattmp = t.split("S")),
      (lat = dms2real(parseInt(lattmp[0]), parseInt(lattmp[1]), parseInt(0))),
      (lat = -lat));
}
function parse_longitude(a) {
  var t = a.replace(/\s+/g, "");
  -1 != t.indexOf("W")
    ? ((lontmp = t.split("W")),
      (lon = dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0))),
      (lon = -lon))
    : -1 != t.indexOf("E") &&
      ((lontmp = t.split("E")),
      (lon = dms2real(parseInt(lontmp[0]), parseInt(lontmp[1]), parseInt(0))));
}
function myplanets(a, t, e, i, s, r, n, h, o, l, c, d, m, u) {
  (this.name = a),
    (this.index = t),
    (this.ra = e),
    (this.ruler = i),
    (this.r_index = s),
    (this.aspect = r),
    (this.day = n),
    (this.happy_zodiac = h),
    (this.happy_house = o),
    (this.sad_zodiac = l),
    (this.sad_house = c),
    (this.good_friend = d),
    (this.bad_friend = m),
    (this.transitdeg = u),
    (this.house = ""),
    (this.zodiac = ""),
    (this.degree = ""),
    (this.dosha = ""),
    (this.naksha = ""),
    (this.retro = ""),
    (this.range = ""),
    (this.rasizn = ""),
    (this.horadeg = ""),
    (this.horazn = ""),
    (this.drekkdeg = ""),
    (this.drekkzn = ""),
    (this.turydeg = ""),
    (this.turyzn = ""),
    (this.pancdeg = ""),
    (this.panczn = ""),
    (this.shashdeg = ""),
    (this.shashzn = ""),
    (this.shaptdeg = ""),
    (this.shaptzn = ""),
    (this.ashtdeg = ""),
    (this.ashtzn = ""),
    (this.navdeg = ""),
    (this.navzn = ""),
    (this.dashdeg = ""),
    (this.dashzn = ""),
    (this.ekaddeg = ""),
    (this.ekadzn = ""),
    (this.dwaddeg = ""),
    (this.dwadzn = ""),
    (this.getra = function () {
      return this.ra;
    }),
    (this.getzodiac = function () {
      return this.zodiac;
    }),
    (this.getdegree = function () {
      return this.degree;
    }),
    (this.compute = function (a) {
      (this.ra = mod360(a ? this.transitdeg : this.ra)),
        (this.horadeg =
          this.ra - 15 - 60 * Math.floor((this.ra - 15) * (1 / 60)) + 90),
        (this.horazn = calc_zodiac(this.horadeg)),
        (this.shashdeg = mod2pi(6 * this.ra * RADS) * DEGS),
        (this.shashzn = calc_zodiac(this.shashdeg)),
        (this.ashtdeg = mod2pi(8 * this.ra * RADS) * DEGS),
        (this.ashtzn = calc_zodiac(this.ashtdeg)),
        (this.navdeg = mod2pi(9 * this.ra * RADS) * DEGS),
        (this.navzn = calc_zodiac(this.navdeg));
      var t = 12 * (this.ra - 30 * Math.floor(this.ra * (1 / 30))),
        e = 30 * parseInt(this.ra / 30);
      (this.dwaddeg = mod2pi((e + t) * RADS) * DEGS),
        (this.dwadzn = calc_zodiac(this.dwaddeg)),
        this.ra >= 0 && this.ra <= 30
          ? ((this.zodiac = "Aries"),
            (this.rasizn = 1),
            (this.range = "000-030"),
            (this.degree = this.ra - 0))
          : this.ra > 30 && this.ra <= 60
          ? ((this.zodiac = "Taurus"),
            (this.rasizn = 2),
            (this.range = "030-060"),
            (this.degree = this.ra - 30))
          : this.ra > 60 && this.ra <= 90
          ? ((this.zodiac = "Gemini"),
            (this.rasizn = 3),
            (this.range = "060-090"),
            (this.degree = this.ra - 60))
          : this.ra > 90 && this.ra <= 120
          ? ((this.zodiac = "Cancer"),
            (this.rasizn = 4),
            (this.range = "090-120"),
            (this.degree = this.ra - 90))
          : this.ra > 120 && this.ra <= 150
          ? ((this.zodiac = "Leo"),
            (this.rasizn = 5),
            (this.range = "120-150"),
            (this.degree = this.ra - 120))
          : this.ra > 150 && this.ra <= 180
          ? ((this.zodiac = "Virgo"),
            (this.rasizn = 6),
            (this.range = "150-180"),
            (this.degree = this.ra - 150))
          : this.ra > 180 && this.ra <= 210
          ? ((this.zodiac = "Libra"),
            (this.rasizn = 7),
            (this.range = "180-210"),
            (this.degree = this.ra - 180))
          : this.ra > 210 && this.ra <= 240
          ? ((this.zodiac = "Scorpio"),
            (this.rasizn = 8),
            (this.range = "210-240"),
            (this.degree = this.ra - 210))
          : this.ra > 240 && this.ra <= 270
          ? ((this.zodiac = "Sagittarius"),
            (this.rasizn = 9),
            (this.range = "240-270"),
            (this.degree = this.ra - 240))
          : this.ra > 270 && this.ra <= 300
          ? ((this.zodiac = "Capricorn"),
            (this.rasizn = 10),
            (this.range = "270-300"),
            (this.degree = this.ra - 270))
          : this.ra > 300 && this.ra <= 330
          ? ((this.zodiac = "Aquarius"),
            (this.rasizn = 11),
            (this.range = "300-330"),
            (this.degree = this.ra - 300))
          : this.ra > 330 &&
            this.ra <= 360 &&
            ((this.zodiac = "Pisces"),
            (this.rasizn = 12),
            (this.range = "330-360"),
            (this.degree = this.ra - 330)),
        this.compute_division_zodiac(),
        this.compute_division_nakshatra(),
        this.compute_division_houses();
    }),
    (this.compute_division_zodiac = function () {
      for (
        var a = calc_ayanamsa(!1),
          t = calc_ascendant(time.getHours(), time.getMinutes(), !1) - a,
          e = 1,
          i = 0;
        MAXZOD > i;
        i++
      )
        calc_zodiac(t) + i > 12
          ? ((myrashis[i] = e), e++)
          : (myrashis[i] = calc_zodiac(t) + i);
      for (
        var e = 1,
          s = t - 15 - 60 * Math.floor((t - 15) * (1 / 60)) + 90,
          i = 0;
        MAXZOD > i;
        i++
      )
        calc_zodiac(s) + i > 12
          ? ((myhoraz[i] = e), e++)
          : (myhoraz[i] = calc_zodiac(s) + i);
      for (var e = 1, s = mod2pi(6 * t * RADS) * DEGS, i = 0; MAXZOD > i; i++)
        calc_zodiac(s) + i > 12
          ? ((mysashthamshaz[i] = e), e++)
          : (mysashthamshaz[i] = calc_zodiac(s) + i);
      for (var e = 1, s = mod2pi(8 * t * RADS) * DEGS, i = 0; MAXZOD > i; i++)
        calc_zodiac(s) + i > 12
          ? ((myashthamsaz[i] = e), e++)
          : (myashthamsaz[i] = calc_zodiac(s) + i);
      var e = 1,
        s = 0;
      s = mod2pi(9 * t * RADS) * DEGS;
      for (var i = 0; MAXZOD > i; i++)
        calc_zodiac(s) + i > 12
          ? ((mynavamsaz[i] = e), e++)
          : (mynavamsaz[i] = calc_zodiac(s) + i);
      var e = 1,
        s = 0,
        r = 12 * (t - 30 * Math.floor(t * (1 / 30))),
        n = 30 * parseInt(t / 30);
      s = mod2pi((n + r) * RADS) * DEGS;
      for (var i = 0; MAXZOD > i; i++)
        calc_zodiac(s) + i > 12
          ? ((mydwadashamsaz[i] = e), e++)
          : (mydwadashamsaz[i] = calc_zodiac(s) + i);
    }),
    (this.compute_division_nakshatra = function () {
      for (var a = 0; 9 >= a; a++)
        (mynaksha[a] = calc_nakshatra(mygrahas[a].getra(), 1)),
          (mynakshal[a] = calc_nakshatra(mygrahas[a].getra(), 2)),
          (mynakshap[a] = calc_nakshatra(mygrahas[a].getra(), 3));
    }),
    (this.compute_division_houses = function () {
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].rasizn;
      calc_houses(myrashis, mybhavas, mygrahas);
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].horazn;
      calc_houses(myhoraz, myhorah, mygrahas);
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].shashzn;
      calc_houses(mysashthamshaz, mysashthamshah, mygrahas);
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].ashtzn;
      calc_houses(myashthamsaz, myashthamsah, mygrahas);
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].navzn;
      calc_houses(mynavamsaz, mynavamsah, mygrahas);
      for (var a = 0; 9 >= a; a++) planets[a] = mygrahas[a].dwadzn;
      calc_houses(mydwadashamsaz, mydwadashamsah, mygrahas);
    });
}
function calc_zodiac(a) {
  var t,
    e = mod360(a);
  return (
    e >= 0 && 30 >= e
      ? (t = Aries)
      : e > 30 && 60 >= e
      ? (t = Taurus)
      : e > 60 && 90 >= e
      ? (t = Gemini)
      : e > 90 && 120 >= e
      ? (t = Cancer)
      : e > 120 && 150 >= e
      ? (t = Leo)
      : e > 150 && 180 >= e
      ? (t = Virgo)
      : e > 180 && 210 >= e
      ? (t = Libra)
      : e > 210 && 240 >= e
      ? (t = Scorpio)
      : e > 240 && 270 >= e
      ? (t = Sagittarius)
      : e > 270 && 300 >= e
      ? (t = Capricorn)
      : e > 300 && 330 >= e
      ? (t = Aquarius)
      : e > 330 && 360 >= e && (t = Pisces),
    t
  );
}
function calc_houses(a, t, e) {
  (t[1] = ""),
    (t[2] = ""),
    (t[3] = ""),
    (t[4] = ""),
    (t[5] = ""),
    (t[6] = ""),
    (t[7] = ""),
    (t[8] = ""),
    (t[9] = ""),
    (t[10] = ""),
    (t[11] = ""),
    (t[12] = "");
  var i, s;
  for (i = 0; 11 >= i; i++)
    for (s = 0; 9 >= s; s++)
      s > 9 && (s = 0),
        a[i] == planets[s] && 0 == i
          ? (t[1] += e[s].name + " ")
          : a[i] == planets[s] && 1 == i
          ? (t[2] += e[s].name + " ")
          : a[i] == planets[s] && 2 == i
          ? (t[3] += e[s].name + " ")
          : a[i] == planets[s] && 3 == i
          ? (t[4] += e[s].name + " ")
          : a[i] == planets[s] && 4 == i
          ? (t[5] += e[s].name + " ")
          : a[i] == planets[s] && 5 == i
          ? (t[6] += e[s].name + " ")
          : a[i] == planets[s] && 6 == i
          ? (t[7] += e[s].name + " ")
          : a[i] == planets[s] && 7 == i
          ? (t[8] += e[s].name + " ")
          : a[i] == planets[s] && 8 == i
          ? (t[9] += e[s].name + " ")
          : a[i] == planets[s] && 9 == i
          ? (t[10] += e[s].name + " ")
          : a[i] == planets[s] && 10 == i
          ? (t[11] += e[s].name + " ")
          : a[i] == planets[s] && 11 == i && (t[12] += e[s].name + " ");
}
function calc_nakshatra(a, t) {
  var e,
    i,
    s = 0,
    r = 0;
  if (
    (0 > a && (a += 360),
    a >= 0 && 13.3333 >= a
      ? ((e = "Ashvini"), (i = "Ke"), (s = a - 0), (r = 0))
      : a > 13.3333 && 26.6667 >= a
      ? ((e = "Bharani"), (i = "Ve"), (s = a - 13.3333), (r = 13.3333))
      : a > 26.6667 && 40 >= a
      ? ((e = "Krittika"), (i = "Su"), (s = a - 26.6667), (r = 26.6667))
      : a > 40 && 53.3333 >= a
      ? ((e = "Rohini"), (i = "Mo"), (s = a - 40), (r = 40))
      : a > 53.3333 && 66.6667 >= a
      ? ((e = "Mrigashir"), (i = "Ma"), (s = a - 53.3333), (r = 53.3333))
      : a > 66.6667 && 80 >= a
      ? ((e = "Ardra"), (i = "Ra"), (s = a - 66.6667), (r = 66.6667))
      : a > 80 && 93.3333 >= a
      ? ((e = "Punarvasu"), (i = "Ju"), (s = a - 80), (r = 80))
      : a > 93.3333 && 106.6667 >= a
      ? ((e = "Pushya"), (i = "Sa"), (s = a - 93.3333), (r = 93.3333))
      : a > 106.6667 && 120 >= a
      ? ((e = "Ashlesha"), (i = "Me"), (s = a - 106.6667), (r = 106.6667))
      : a > 120 && 133.3333 >= a
      ? ((e = "Magha"), (i = "Ke"), (s = a - 120), (r = 120))
      : a > 133.3333 && 146.6667 >= a
      ? ((e = "P.Phalg"), (i = "Ve"), (s = a - 133.3333), (r = 133.3333))
      : a > 146.6667 && 160 >= a
      ? ((e = "U.Phalg"), (i = "Su"), (s = a - 146.6667), (r = 146.6667))
      : a > 160 && 173.3333 >= a
      ? ((e = "Hasta"), (i = "Mo"), (s = a - 160), (r = 160))
      : a > 173.3333 && 186.6667 >= a
      ? ((e = "Chitra"), (i = "Ma"), (s = a - 173.3333), (r = 173.3333))
      : a > 186.6667 && 200 >= a
      ? ((e = "Svati"), (i = "Ra"), (s = a - 186.6667), (r = 186.6667))
      : a > 200 && 213.3333 >= a
      ? ((e = "Vishakha"), (i = "Ju"), (s = a - 200), (r = 200))
      : a > 213.3333 && 226.6667 >= a
      ? ((e = "Anuradha"), (i = "Sa"), (s = a - 213.3333), (r = 213.3333))
      : a > 226.6667 && 240 >= a
      ? ((e = "Jyeshtha"), (i = "Me"), (s = a - 226.6667), (r = 226.6667))
      : a > 240 && 253.3333 >= a
      ? ((e = "Mula"), (i = "Ke"), (s = a - 240), (r = 240))
      : a > 253.3333 && 266.6667 >= a
      ? ((e = "P.Shadha"), (i = "Ve"), (s = a - 253.3333), (r = 253.3333))
      : a > 266.6667 && 280 >= a
      ? ((e = "U.Shadha"), (i = "Su"), (s = a - 266.6667), (r = 266.6667))
      : a > 280 && 293.3333 >= a
      ? ((e = "Sravana"), (i = "Mo"), (s = a - 280), (r = 280))
      : a > 293.3333 && 306.6667 >= a
      ? ((e = "Dhanista"), (i = "Ma"), (s = a - 293.3333), (r = 293.3333))
      : a > 306.6667 && 320 >= a
      ? ((e = "Shatabhi"), (i = "Ra"), (s = a - 306.6667), (r = 306.6667))
      : a > 320 && 333.3333 >= a
      ? ((e = "P.Bhadra"), (i = "Ju"), (s = a - 320), (r = 320))
      : a > 333.3333 && 346.6667 >= a
      ? ((e = "U.Bhadra"), (i = "Sa"), (s = a - 333.3333), (r = 333.3333))
      : a > 346.6667 &&
        360 >= a &&
        ((e = "Revati"), (i = "Me"), (s = a - 346.6667), (r = 346.6667)),
    1 == t)
  )
    return e;
  if (2 == t) return i;
  if (3 == t) {
    if (s >= 0 && 3.333334 >= s) return 1;
    if (s > 3.333334 && 6.666667 >= s) return 2;
    if (s > 6.666667 && 9.999999 >= s) return 3;
    if (s > 9.999999 && 13.4 >= s) return 4;
  } else if (4 == t) return r;
}
function calc_planets_position() {
  var a = new Date();
  dn = calc_day_number(time.getHours(), time.getMinutes(), !1);
  var t = calc_julian_date(time.getHours(), time.getMinutes(), tz, !1),
    e = calc_julian_date(a.getHours(), a.getMinutes(), tz, !0),
    i = calc_ayanamsa(!1),
    s = calc_ayanamsa(!0),
    r = calc_ascendant(time.getHours(), time.getMinutes(), !1) - i,
    n = calc_ascendant(a.getHours(), a.getMinutes(), !0) - s;
  (mygrahas[0] = new myplanets(
    "As",
    AS,
    r,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    n
  )),
    (mygrahas[1] = new myplanets(
      "Su",
      SU,
      calc_vsop87(1, t) - i,
      "Leo",
      Leo,
      "7th",
      "Sunday",
      "Le,Ar",
      "1,5,9,10",
      "Li",
      "4,6,7,8,12",
      "Mo,Ma,Ju",
      "Sa,Ve",
      calc_vsop87(1, e) - s
    )),
    (mygrahas[2] = new myplanets(
      "Mo",
      MO,
      calc_moon_positionIII(!1) - i,
      "Cancer",
      Cancer,
      "7th",
      "Monday",
      "Ca,Ta",
      "4,7,9,11,12",
      "Sc,Cp",
      "2,3,6,8",
      "Su,Me",
      " - ",
      calc_moon_positionIII(!0) - s
    )),
    (mygrahas[3] = new myplanets(
      "Ma",
      MA,
      calc_vsop87(3, t) - i,
      "Aries",
      Aries,
      "4,7,8th",
      "Tuesday",
      "Ar,Sc,Cp",
      "1,3,5,8,10,11",
      "Ca,Li,Pi",
      "2,4,6,12",
      "Su,Mo,Ju",
      "Me",
      calc_vsop87(3, e) - s
    )),
    (mygrahas[4] = new myplanets(
      "Me",
      ME,
      calc_vsop87(4, t) - i,
      "Virgo",
      Virgo,
      "7th",
      "Wednesday",
      "Vi,Ge",
      "1,3,5,6,7,10,11",
      "Sa,Pi",
      "2,4,8,9,12",
      "Ve,Su",
      "Mo",
      calc_vsop87(4, e) - s
    )),
    (mygrahas[5] = new myplanets(
      "Ju",
      JU,
      calc_vsop87(5, t) - i,
      "Sagittarius",
      Sagittarius,
      "5,7,9th",
      "Thursday",
      "Ca",
      "1,4,5,7,9,10,2,11",
      "Cp",
      "2,11",
      "Su,Mo,Ma",
      "Ve,Me",
      calc_vsop87(5, e) - s
    )),
    (mygrahas[6] = new myplanets(
      "Ve",
      VE,
      calc_vsop87(6, t) - i,
      "Libra",
      Libra,
      "7th",
      "Friday",
      "Li,Ta,Pi",
      "1,2,4,5,7.9.11,12",
      "Sc,Vi",
      "3,6,8,10",
      "Sa,Me",
      "Su,Mo",
      calc_vsop87(6, e) - s
    )),
    (mygrahas[7] = new myplanets(
      "Sa",
      SA,
      calc_vsop87(7, t) - i,
      "Aquarius",
      Aquarius,
      "3,7,10th",
      "Saturday",
      "Li,Cp,Aq",
      "3,6,7,10,11",
      "Ar,Ca",
      "4,5,8,9,12",
      "Me,Ve",
      "Su,Mo,Ma",
      calc_vsop87(7, e) - s
    )),
    (mygrahas[8] = new myplanets(
      "Ra",
      RA,
      calc_moon_acending_node(!1),
      "",
      "",
      "5,7,9th",
      "",
      "Ta,Ge,Vi,Li",
      "1,2,3,5,10,11",
      "Sg,Ar,Le,Pi",
      "4,6,7,8,9,12",
      " - ",
      " - ",
      calc_moon_acending_node(!0)
    )),
    (mygrahas[9] = new myplanets(
      "Ke",
      KE,
      mod360(calc_moon_acending_node(!1) + 180),
      "",
      "",
      "5,7,9th",
      "",
      "Sc,Pi,Sg,Ar",
      "4,6,8,9,12",
      "Ta,Ge,Vi,Li",
      "1,2,3,5,7,10,11",
      " - ",
      " - ",
      calc_moon_acending_node(!0) + 180
    ));
}
function deg2rad(degrees) {
  return degrees * (Math.PI / 180);
}

function calc_position(a) {
  calc_planets_position();
  for (var t = 0; 9 >= t; t++) mygrahas[t].compute(a);
}
function elements() {
  (a = parseFloat("0")),
    (e = parseFloat("0")),
    (i = parseFloat("0")),
    (O = parseFloat("0")),
    (w = parseFloat("0")),
    (L = parseFloat("0"));
}
function calc_day_number(a, t, e) {
  var i,
    s,
    r,
    n = new Date();
  if (
    (e
      ? ((i = n.getFullYear()), (s = n.getMonth() + 1), (r = n.getDate()))
      : ((i = date.getFullYear()),
        (s = date.getMonth() + 1),
        (r = date.getDate())),
    3 > s && ((i -= 1), (s += 12)),
    1e4 * i + 100 * s + r > 15821004)
  )
    var h = Math.floor(0.01 * i),
      o = 2 - h + Math.floor(0.25 * h);
  else
    var h = Math.floor(0.01 * i),
      o = 0 * (2 - h + Math.floor(0.25 * h));
  var l = Math.floor(365.25 * i),
    c = Math.floor(30.6001 * (s + 1));
  return o + l + c - 730550.5 + r + (a - tz + t / 60) / 24;
}
function calc_julian_date(a, t, e, i) {
  var s,
    r,
    n,
    h = new Date();
  i
    ? ((s = h.getFullYear()), (r = h.getMonth() + 1), (n = h.getDate()))
    : ((s = date.getFullYear()),
      (r = date.getMonth() + 1),
      (n = date.getDate()));
  var o,
    l = s,
    c = r;
  r > 2 ? ((l = s), c++) : (l--, (c += 13));
  var d = Math.floor(365.25 * l) + Math.floor(30.6001 * c) + n + 1720995;
  if (n + 31 * (r + 12 * s) >= 588829) {
    var m = Math.floor(0.01 * l);
    d += 2 - m + Math.floor(0.25 * m);
  }
  (o = (a - e) / 24 - 0.5), 0 > o && ((o += 1), --d);
  var u = o + (t + dT(i) / 60) / 60 / 24,
    f = Math.floor(1e7 * (d + u));
  return 1e7 * (d + u) - f > 0.5 ? ++f : (f *= 1), 1e-7 * f;
}
function calc_day_of_the_week(a) {
  var t,
    e = calc_julian_date(time.getHours(), time.getMinutes(), 0, a),
    i = (Math.floor(e + 0.5) + 1) % 7;
  switch (i) {
    case 0:
      t = "Sunday";
      break;
    case 1:
      t = "Monday";
      break;
    case 2:
      t = "Tuesday";
      break;
    case 3:
      t = "Wednesday";
      break;
    case 4:
      t = "Thursday";
      break;
    case 5:
      t = "Friday";
      break;
    case 6:
      t = "Saturday";
      break;
    default:
      t = "NaN";
  }
  return t;
}
function calc_sideral_time(a, t, e) {
  "W" == londir && (lon = -lon);
  var i = calc_day_number(a, t, e) / 36525,
    s = 36525 * i,
    r = mod360(
      280.46061837 +
        360.98564736629 * s +
        387933e-9 * i * i -
        (i * i * i) / 3871e4 +
        lon
    );
  return r;
}
function calc_ra(a) {
  var t = dn / 36525,
    e = new elements();
  mean_elements(e, a);
  var i = e.a,
    s = e.e,
    r = e.i,
    n = e.O,
    h = e.w,
    o = e.L,
    l = new elements();
  mean_elements(l, 0);
  var c = l.a,
    d = l.e,
    m = (l.i, l.O, l.w),
    u = l.L,
    f = mod2pi(u - m),
    M = true_anomaly(f, d),
    g = (c * (1 - d * d)) / (1 + d * Math.cos(M)),
    p = g * Math.cos(M + m),
    v = g * Math.sin(M + m),
    S = 0,
    _ = mod2pi(o - h),
    y = true_anomaly(_, e.e),
    D = (i * (1 - s * s)) / (1 + s * Math.cos(y)),
    A =
      D *
      (Math.cos(n) * Math.cos(y + h - n) -
        Math.sin(n) * Math.sin(y + h - n) * Math.cos(r)),
    R =
      D *
      (Math.sin(n) * Math.cos(y + h - n) +
        Math.cos(n) * Math.sin(y + h - n) * Math.cos(r)),
    x = D * Math.sin(y + h - n) * Math.sin(r);
  0 == a && ((A = 0), (R = 0), (x = 0));
  {
    var z = A - p,
      w = R - v,
      T = x - S,
      I = 23.4392907437 * t * RADS,
      k = z,
      b = w * Math.cos(I) - T * Math.sin(I);
    w * Math.sin(I) + T * Math.cos(I);
  }
  return (ra = mod2pi(Math.atan2(b, k)) * DEGS);
}
function true_anomaly(a, t) {
  var e,
    i,
    s = a + t * Math.sin(a) * (1 + t * Math.cos(a));
  do (i = s), (s = i - (i - t * Math.sin(i) - a) / (1 - t * Math.cos(i)));
  while (Math.abs(s - i) > EPS);
  return (
    (e = 2 * Math.atan(Math.sqrt((1 + t) / (1 - t)) * Math.tan(0.5 * s))),
    0 > e && (e += 2 * Math.PI),
    e
  );
}
function mean_elements(a, t) {
  var e = dn / 36525;
  switch (t) {
    case 0:
      (a.a = 1.00000011 - 5e-8 * e),
        (a.e = 0.01671022 - 3804e-8 * e),
        (a.i = (5e-5 - (46.94 * e) / 3600) * RADS),
        (a.O = (-11.26064 - (18228.25 * e) / 3600) * RADS),
        (a.w = (102.94719 + (1198.28 * e) / 3600) * RADS),
        (a.L = mod2pi((100.46435 + (129597740.63 * e) / 3600) * RADS));
      break;
    case 1:
      (a.a = 1.52366231 - 7221e-8 * e),
        (a.e = 0.09341233 + 11902e-8 * e),
        (a.i = (1.85061 - (25.47 * e) / 3600) * RADS),
        (a.O = (49.57854 - (1020.19 * e) / 3600) * RADS),
        (a.w = (336.04084 + (1560.78 * e) / 3600) * RADS),
        (a.L = mod2pi((355.45332 + (68905103.78 * e) / 3600) * RADS));
      break;
    case 2:
      (a.a = 0.38709893 + 6.6e-7 * e),
        (a.e = 0.20563069 + 2527e-8 * e),
        (a.i = (7.00487 - (23.51 * e) / 3600) * RADS),
        (a.O = (48.33167 - (446.3 * e) / 3600) * RADS),
        (a.w = (77.45645 + (573.57 * e) / 3600) * RADS),
        (a.L = mod2pi((252.25084 + (538101628.29 * e) / 3600) * RADS));
      break;
    case 3:
      (a.a = 5.20336301 + 60737e-8 * e),
        (a.e = 0.04839266 - 1288e-7 * e),
        (a.i = (1.3053 - (4.15 * e) / 3600) * RADS),
        (a.O = (100.55615 + (1217.17 * e) / 3600) * RADS),
        (a.w = (14.75385 + (839.93 * e) / 3600) * RADS),
        (a.L = mod2pi((34.40438 + (10925078.35 * e) / 3600) * RADS));
      break;
    case 4:
      (a.a = 0.72333199 + 9.2e-7 * e),
        (a.e = 0.00677323 - 4938e-8 * e),
        (a.i = (3.39471 - (2.86 * e) / 3600) * RADS),
        (a.O = (76.68069 - (996.89 * e) / 3600) * RADS),
        (a.w = (131.53298 - (108.8 * e) / 3600) * RADS),
        (a.L = mod2pi((181.97973 + (210664136.06 * e) / 3600) * RADS));
      break;
    case 5:
      (a.a = 9.53707032 - 0.0030153 * e),
        (a.e = 0.0541506 - 36762e-8 * e),
        (a.i = (2.48446 + (6.11 * e) / 3600) * RADS),
        (a.O = (113.71504 - (1591.05 * e) / 3600) * RADS),
        (a.w = (92.43194 - (1948.89 * e) / 3600) * RADS),
        (a.L = mod2pi((49.94432 + (4401052.95 * e) / 3600) * RADS));
      break;
    default:
      window.alert(" Have you discovered a new planet :) ");
  }
}
function calc_vsop87(a, t) {
  var e,
    i,
    s,
    r,
    n,
    h,
    o,
    l,
    c,
    d,
    m = 0,
    u = 1,
    f = 2,
    M = (t - 2451545) / 365250;
  switch ((calc_earth(M), (r = earth[m]), (n = earth[u]), (h = earth[f]), a)) {
    case 1:
      (e = -earth[m]), (i = -earth[u]), (s = -earth[f]);
      break;
    case 2:
      break;
    case 3:
      calc_mars(M), (e = mars[m]), (i = mars[u]), (s = mars[f]);
      break;
    case 4:
      calc_mercury(M), (e = mercury[m]), (i = mercury[u]), (s = mercury[f]);
      break;
    case 5:
      calc_jupiter(M), (e = jupiter[m]), (i = jupiter[u]), (s = jupiter[f]);
      break;
    case 6:
      calc_venus(M), (e = venus[m]), (i = venus[u]), (s = venus[f]);
      break;
    case 7:
      calc_shani(M), (e = shani[m]), (i = shani[u]), (s = shani[f]);
      break;
    default:
      window.alert(" error ;) ");
  }
  return (
    a == SU && ((r = 0), (n = 0), (h = 0)),
    (o = e - r),
    (l = i - n),
    (c = s - h),
    (d = Math.atan2(l, o) * DEGS)
  );
}

function calc_house_position(ayamansa) {
  const new_house_positions = houses.map(
    (house) => house.position.longitude - ayamansa
  );
  calc_house_rashi(new_house_positions);
  const { lagan, compound } = calc_house_degree(new_house_positions);
  const planetData = calc_planet_degree_and_sign();
  calc_planet_degree_with_lagan(lagan, compound, planetData);
}

function calc_house_rashi(positions) {
  myhouseRashis = positions.map((new_longitude) => {
    if (new_longitude < 30) {
      return 1; // Rashi 1
    } else {
      return Math.floor(new_longitude / 30) + 1; // Calculate rashi based on longitude
    }
  });
}

function calc_house_degree(positions) {
  let compound_degree = 0;
  let lagan_degree = 0;
  const myhouseDegrees = positions.map((new_longitude) =>
    calculateDegree(new_longitude)
  );
  lagan_degree = myhouseDegrees[0];
  if (lagan_degree > 15) {
    compound_degree = lagan_degree - 15;
  } else {
    compound_degree = lagan_degree + 15;
  }
  return { lagan: lagan_degree, compound: compound_degree };
}

function calculateDegree(longitude) {
  if (longitude < 30) {
    return longitude; // Degree is same as longitude
  } else {
    return longitude % 30; // Calculate degree based on remainder
  }
}

function calc_planet_degree_and_sign() {
  let planetData = [];

  for (let planet in mygrahas) {
    let name = mygrahas[planet].name;
    let degree = mygrahas[planet].getdegree();
    let sign = mygrahas[planet].rasizn;
    let prevSign = sign > 0 ? sign - 1 : "";
    planetData.push({
      name: name,
      degree: degree,
      sign: sign,
      prevSign: prevSign,
    });
  }
  return planetData;
}

function calc_planet_degree_with_lagan(lagan, compound, planetData) {
  const map = {};
  console.log(planetData);
  planetData.forEach((planet, index) => {
    let name = planet.name;
    let newDegree = planet.degree + compound;
    let planetSign = planet.sign;
    let planetPrevSign = planet.prevSign;
    let sign;
    if (newDegree > lagan) {
      sign = planetSign;
    } else if (newDegree < lagan) {
      console.log(myhouseRashis);
      if (myhouseRashis.includes(planetPrevSign)) {
        console.log(planetPrevSign, "oye");
        sign = planetPrevSign;
      } else {
        sign = planetSign;
      }
    }

    if (!map[sign]) {
      map[sign] = [];
    }

    map[sign].push(name);
  });

  console.log(map);
  let result = findKeyIndexAndCreateArray(map);
  result.unshift("empty");
  console.log(result);
  myHouseBhavas = result;
  if (myHouseBhavas[1] === "As") {
    myHouseBhavas.splice(1, 1, "");
  }
}

function findKeyIndexAndCreateArray(obj) {
  const resultArray = new Array(myhouseRashis.length).fill("");

  for (const key in obj) {
    const keyIndex = myhouseRashis.indexOf(parseInt(key));

    if (keyIndex !== -1) {
      const objValues = obj[key];
      const concatenatedValues = objValues.join(" ");
      resultArray[keyIndex] = concatenatedValues;
    }
  }

  return resultArray;
}

function calc_moon_positionI() {
  var a = date.getFullYear(),
    t = date.getMonth() + 1,
    e = date.getDate(),
    i = a,
    s = t,
    r = time.getHours() - tz + time.getMinutes() / 60;
  if ((3 > t && ((i -= 1), (s += 12)), 1e4 * a + 100 * t + e > 15821004))
    var n = Math.floor(0.01 * i),
      h = 2 - n + Math.floor(0.25 * n);
  else
    var n = Math.floor(0.01 * i),
      h = 0 * (2 - n + Math.floor(0.25 * n));
  var o =
      Math.floor(365.25 * i) +
      Math.floor(30.6001 * (s + 1)) -
      730550.4 +
      e +
      r / 24 +
      h,
    l = o / 36525,
    c = mod360(280.466 + 36000.8 * l),
    d = mod360(357.529 + 35999 * l - 1536e-7 * l * l + (l * l * l) / 2449e4),
    m =
      Math.sin(d * RADS) * (1.915 - 0.004817 * l - 14e-6 * l * l) +
      (0.01999 - 101e-6 * l) * Math.sin(2 * d * RADS) +
      29e-5 * Math.sin(3 * d * RADS),
    u = d + m,
    f = 0.01671 - 4204e-8 * l - 1.236e-7 * l * l,
    M = (0.99972 / (1 + f * Math.cos(u * RADS)), c + m),
    g = mod360(125.04 - 1934.1 * l),
    c = M - 0.00569 - 0.00478 * Math.sin(g * RADS),
    p = (84381.448 - 46.815 * l) / 3600,
    v = Math.sin(M * RADS) * Math.cos(p * RADS),
    S = 0,
    _ = Math.cos(M * RADS);
  RAs = mod2pi(Math.atan2(v - S, _)) * DEGS;
  var y = mod360(
      93.2721 + 483202 * l - 0.003403 * l * l - (l * l * l) / 3526e3
    ),
    D = mod360(218.316 + 481268 * l),
    A = mod360(134.963 + 477199 * l + 0.008997 * l * l + (l * l * l) / 69700),
    R = mod360(297.85 + 445267 * l - 0.00163 * l * l + (l * l * l) / 545900),
    x =
      (1 +
        (-20954 * Math.cos(A * RADS) -
          3699 * Math.cos((2 * R - A) * RADS) -
          2956 * Math.cos(2 * R) * RADS) /
          385e3,
      5.128 * Math.sin(y * RADS) +
        0.2806 * Math.sin((A + y) * RADS) +
        0.2777 * Math.sin((A - y) * RADS) +
        0.1732 * Math.sin((2 * R - y) * RADS)),
    z =
      6.289 * Math.sin(A * RADS) +
      1.274 * Math.sin((2 * R - A) * RADS) +
      0.6583 * Math.sin(2 * R * RADS) +
      0.2136 * Math.sin(2 * A * RADS) -
      0.1851 * Math.sin(d * RADS) -
      0.1143 * Math.sin(2 * y * RADS) +
      0.0588 * Math.sin((2 * R - 2 * A) * RADS) +
      0.0572 * Math.sin((2 * R - d - A) * RADS) +
      0.0533 * Math.sin((2 * R + A) * RADS),
    w = z + D,
    T = Math.sin(w * RADS) * Math.cos(p * RADS),
    I = Math.tan(x * RADS) * Math.sin(p * RADS),
    k = Math.cos(w * RADS);
  return (RAm = mod2pi(Math.atan2(T - I, k)) * DEGS);
}
function calc_moon_positionII() {
  var a,
    t =
      calc_julian_date(time.getHours(), time.getMinutes(), tz, !1) - 2451543.5,
    e = mod2pi((125.1228 - 0.0529538083 * t) * RADS),
    i = 5.1454 * RADS,
    s = mod2pi((318.0634 + 0.1643573223 * t) * RADS),
    r = 60.2666,
    n = 0.0549,
    h = mod2pi((115.3654 + 13.0649929509 * t) * RADS),
    o = 23.4393 - 3.563e-7 * t,
    l = h + n * Math.sin(h) * (1 + n * Math.cos(h));
  do (a = l), (l = a - (a - n * Math.sin(a) - h) / (1 - n * Math.cos(a)));
  while (Math.abs(l - a) > EPS);
  var c,
    d,
    m,
    u = r * (Math.cos(l) - n),
    f = r * Math.sqrt(1 - n * n) * Math.sin(l),
    M = mod2pi(Math.atan2(f, u)),
    g = Math.sqrt(u * u + f * f),
    p =
      g *
      (Math.cos(e) * Math.cos(M + s) -
        Math.sin(e) * Math.sin(M + s) * Math.cos(i)),
    v =
      g *
      (Math.sin(e) * Math.cos(M + s) +
        Math.cos(e) * Math.sin(M + s) * Math.cos(i)),
    S = g * Math.sin(M + s) * Math.sin(i),
    _ = p,
    y = v * Math.cos(o) - S * Math.sin(o),
    D = v * Math.sin(o) + S * Math.cos(o),
    A = mod2pi(Math.atan2(v, p)),
    R = Math.atan2(S, Math.sqrt(p * p + v * v)),
    x =
      (Math.sqrt(_ * _ + y * y + D * D),
      mod2pi((282.9404 + 470935e-10 * t) * RADS)),
    z = mod2pi((356.047 + 0.9856002585 * t) * RADS),
    w = mod2pi((z * DEGS + x * DEGS) * RADS),
    T = h * DEGS,
    I = mod2pi(e + s + h) * DEGS,
    k = I - w * DEGS,
    b = I - e * DEGS;
  (c =
    -1.274 * Math.sin(T * RADS - 2 * k * RADS) +
    0.658 * Math.sin(2 * k * RADS) -
    0.186 * Math.sin(z) -
    0.059 * Math.sin(2 * T * RADS - 2 * k * RADS) -
    0.057 * Math.sin(T * RADS - 2 * k * RADS + z) +
    0.053 * Math.sin(T * RADS + 2 * k * RADS) +
    0.046 * Math.sin(2 * k * RADS - z) +
    0.041 * Math.sin(T * RADS - z) -
    0.035 * Math.sin(k * RADS) -
    0.031 * Math.sin(T * RADS + z) -
    0.015 * Math.sin(2 * b * RADS - 2 * k * RADS) +
    0.011 * Math.sin(T * RADS - 4 * k * RADS)),
    (d =
      -0.173 * Math.sin(b * RADS - 2 * k * RADS) -
      0.055 * Math.sin(T * RADS - b * RADS - 2 * k * RADS) -
      0.046 * Math.sin(T * RADS + b * RADS - 2 * k * RADS) +
      0.033 * Math.sin(b * RADS + 2 * k * RADS) +
      0.017 * Math.sin(2 * T * RADS + b * RADS)),
    (m =
      -0.58 * Math.cos(T * RADS - 2 * k * RADS) -
      0.46 * Math.cos(2 * k * RADS)),
    (A = A * DEGS + c),
    (R = R * DEGS + d),
    (g += m);
  {
    var E = g * Math.cos(A * RADS) * Math.cos(R * RADS),
      P = g * Math.sin(A * RADS) * Math.cos(R * RADS);
    g * Math.sin(R * RADS);
  }
  (_ = E),
    (y = P * Math.cos(o * RADS) - 0 * Math.sin(o)),
    (D = P * Math.sin(o * RADS) + 0 * Math.cos(o));
  var H = mod2pi(Math.atan2(y, _)) * DEGS;
  return H;
}
function calc_moon_positionIII(a) {
  for (var t = [60], e = 0; 60 > e; e++) t[e] = [4];
  t = [
    [0, 0, 1, 0],
    [2, 0, -1, 0],
    [2, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 2],
    [2, 0, -2, 0],
    [2, -1, -1, 0],
    [2, 0, 1, 0],
    [2, -1, 0, 0],
    [0, 1, -1, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [2, 0, 0, -2],
    [0, 0, 1, 2],
    [0, 0, 1, -2],
    [4, 0, -1, 0],
    [0, 0, 3, 0],
    [4, 0, -2, 0],
    [2, 1, -1, 0],
    [2, 1, 0, 0],
    [1, 0, -1, 0],
    [1, 1, 0, 0],
    [2, -1, 1, 0],
    [2, 0, 2, 0],
    [4, 0, 0, 0],
    [2, 0, -3, 0],
    [0, 1, -2, 0],
    [2, 0, -1, 2],
    [2, -1, -2, 0],
    [1, 0, 1, 0],
    [2, -2, 0, 0],
    [0, 1, 2, 0],
    [0, 2, 0, 0],
    [2, -2, -1, 0],
    [2, 0, 1, -2],
    [2, 0, 0, 2],
    [4, -1, -1, 0],
    [0, 0, 2, 2],
    [3, 0, -1, 0],
    [2, 1, 1, 0],
    [4, -1, -2, 0],
    [0, 2, -1, 0],
    [2, 2, -1, 0],
    [2, 1, -2, 0],
    [2, -1, 0, -2],
    [4, 0, 1, 0],
    [0, 0, 4, 0],
    [4, -1, 0, 0],
    [1, 0, -2, 0],
    [2, 1, 0, -2],
    [0, 0, 2, -2],
    [1, 1, 1, 0],
    [3, 0, -2, 0],
    [4, 0, -3, 0],
    [2, -1, 2, 0],
    [0, 2, 1, 0],
    [1, 1, -1, 0],
    [2, 0, 3, 0],
    [2, 0, -1, -2],
  ];
  for (var i = [60], e = 0; 60 > e; e++) i[e] = [4];
  i = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 0, 1, -1],
    [2, 0, 0, -1],
    [2, 0, -1, 1],
    [2, 0, -1, -1],
    [2, 0, 0, 1],
    [0, 0, 2, 1],
    [2, 0, 1, -1],
    [0, 0, 2, -1],
    [2, -1, 0, -1],
    [2, 0, -2, -1],
    [2, 0, 1, 1],
    [2, 1, 0, -1],
    [2, -1, -1, 1],
    [2, -1, 0, 1],
    [2, -1, -1, -1],
    [0, 1, -1, -1],
    [4, 0, -1, -1],
    [0, 1, 0, 1],
    [0, 0, 0, 3],
    [0, 1, -1, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, -1],
    [0, 1, 0, -1],
    [1, 0, 0, -1],
    [0, 0, 3, 1],
    [4, 0, 0, -1],
    [4, 0, -1, 1],
    [0, 0, 1, -3],
    [4, 0, -2, 1],
    [2, 0, 0, -3],
    [2, 0, 2, -1],
    [2, -1, 1, -1],
    [2, 0, -2, 1],
    [0, 0, 3, -1],
    [2, 0, 2, 1],
    [2, 0, -3, -1],
    [2, 1, -1, 1],
    [2, 1, 0, 1],
    [4, 0, 0, 1],
    [2, -1, 1, 1],
    [2, -2, 0, -1],
    [0, 0, 1, 3],
    [2, 1, 1, -1],
    [1, 1, 0, -1],
    [1, 1, 0, 1],
    [0, 1, -2, -1],
    [2, 1, -1, -1],
    [1, 0, 1, 1],
    [2, -1, -2, -1],
    [0, 1, 2, 1],
    [4, 0, -2, -1],
    [4, -1, -1, -1],
    [1, 0, 1, -1],
    [4, 0, 1, -1],
    [1, 0, -1, -1],
    [4, -1, 0, -1],
    [2, -2, 0, 1],
  ];
  var s,
    r,
    n,
    h,
    o,
    c,
    d,
    m,
    u,
    f,
    M = [
      6288774, 1274027, 658314, 213618, -185116, -114332, 58793, 57066, 53322,
      45758, -40923, -34720, -30383, 15327, -12528, 10980, 10675, 10034, 8548,
      -7888, -6766, -5163, 4987, 4036, 3994, 3861, 3665, -2689, -2602, 2390,
      -2348, 2236, -2120, -2069, 2048, -1773, -1595, 1215, -1110, -892, -810,
      759, -713, -700, 691, 596, 549, 537, 520, -487, -399, -381, 351, -340,
      330, 327, -323, 299, 294, 0,
    ],
    g = [
      -20905355, -3699111, -2955968, -569925, 48888, -3149, 246158, -152138,
      -170733, -204586, -129620, 108743, 104755, 10321, 0, 79661, -34782,
      -23210, -21636, 24208, 30824, -8379, -16675, -12831, -10445, -11650,
      14403, -7003, 0, 10056, 6322, -9884, 5751, 0, -4950, 4130, 0, -3958, 0,
      3258, 2616, -1897, -2117, 2354, 0, 0, -1423, -1117, -1571, -1739, 0,
      -4421, 0, 0, 0, 0, 1165, 0, 0, 8752,
    ],
    p = [
      5128122, 280602, 277693, 173237, 55413, 46271, 32573, 17198, 9266, 8822,
      8216, 4324, 4200, -3359, 2463, 2211, 2065, -1870, 1828, -1794, -1749,
      -1565, -1491, -1475, -1410, -1344, -1335, 1107, 1021, 833, 777, 671, 607,
      596, 491, -451, 439, 422, 421, -366, -351, 331, 315, 302, -283, -229, 223,
      223, -220, -220, -185, 181, -177, 176, 166, -164, 132, -119, 115, 107,
    ],
    v = [],
    S = 0,
    _ = 0,
    y = 0,
    D = new Date();
  f = a
    ? (calc_julian_date(D.getHours(), D.getMinutes(), tz, a) - 2451545) / 36525
    : (calc_julian_date(time.getHours(), time.getMinutes(), tz, a) - 2451545) /
      36525;
  var A = f * f * f * f,
    R = f * f * f,
    x = f * f;
  for (
    s = mod2pi(
      (218.3164591 +
        481267.88134236 * f -
        0.0013268 * x +
        R / 538841 -
        A / 65194e3) *
        RADS
    ),
      r = mod2pi(
        (297.8502042 +
          445267.1115168 * f -
          0.00163 * x +
          R / 545868 -
          A / 113065e3) *
          RADS
      ),
      n = mod2pi(
        (357.5291092 + 35999.0502909 * f - 1536e-7 * x + R / 2449e4) * RADS
      ),
      h = mod2pi(
        (134.9634114 +
          477198.8676313 * f +
          0.008997 * x +
          R / 69699 -
          A / 14712e3) *
          RADS
      ),
      o = mod2pi(
        (93.2720993 +
          483202.0175273 * f -
          0.0034029 * x -
          R / 3526e3 +
          A / 86331e4) *
          RADS
      ),
      c = mod2pi((119.75 + 131.849 * f) * RADS),
      d = mod2pi((53.09 + 479264.29 * f) * RADS),
      m = mod2pi((313.45 + 481266.484 * f) * RADS),
      v[0] = 1,
      v[1] = 1 - 0.002516 * f - 74e-7 * x,
      v[2] = v[1] * v[1],
      e = 0;
    60 > e;
    e++
  )
    (u = t[e][0] * r + t[e][1] * n + t[e][2] * h + t[e][3] * o),
      (S += M[e] * Math.sin(u) * v[Math.abs(t[e][1])]),
      0 != g[e] && (y += g[e] * Math.cos(u) * v[Math.abs(t[e][1])]),
      (u = i[e][0] * r + i[e][1] * n + i[e][2] * h + i[e][3] * o),
      (_ += p[e] * Math.sin(u) * v[Math.abs(i[e][1])]);
  return (
    (S += 3958 * Math.sin(c) + 1962 * Math.sin(s - o) + 318 * Math.sin(d)),
    (_ +=
      -2235 * Math.sin(s) +
      382 * Math.sin(m) +
      175 * Math.sin(c - o) +
      175 * Math.sin(c + o) +
      127 * Math.sin(s - h) -
      115 * Math.sin(s + h)),
    (l = mod2pi((s * DEGS + S / 1e6) * RADS) * DEGS)
  );
}
function _ecl(a) {
  var t = [
      -4680.93 / 3600,
      -1.55 / 3600,
      1999.25 / 3600,
      -51.38 / 3600,
      -249.67 / 3600,
      -39.05 / 3600,
      7.12 / 3600,
      27.87 / 3600,
      5.79 / 3600,
      2.45 / 3600,
    ],
    e = 23.43929111111111,
    i = 0,
    s = 0,
    r = a / 36525;
  if (((s = i = (a - 2415020) / (100 * r)), Math.abs(i) < 1))
    for (var n = 0; 10 > n; n++) (e += t[n] * s), (s *= i);
  return e;
}
function dT(a) {
  var t,
    e = new Date();
  t = a
    ? e.getFullYear() + (e.getMonth() + 1 - 0.5) / 12
    : date.getFullYear() + (date.getMonth() + 1 - 0.5) / 12;
  var i = -12932e-9 * Math.pow(t - 1955, 2),
    s = 0,
    r = 0,
    n = 0;
  return (
    (t2 = n * n),
    (t3 = n * n * n),
    (t4 = n * n * n * n),
    (t5 = t4 * n),
    (t6 = t5 * n),
    (t7 = t6 * n),
    -500 >= t
      ? ((r = (t - 1820) / 100), (s = -20 + 32 * r * r + i))
      : -500 > t && 500 >= t
      ? ((r = t / 100),
        (s =
          10583.6 -
          1014.41 * r +
          33.78311 * r * r -
          5.952053 * r * r * r -
          0.1798452 * r * r * r * r +
          0.022174192 * r * r * r * r * r +
          0.0090316521 * r * r * r * r * r * r +
          i))
      : t > 500 && 1600 >= t
      ? ((r = (t - 1e3) / 100),
        (s =
          1574.2 -
          556.01 * r +
          71.23472 * r * r +
          0.319781 * r * r * r -
          0.8503463 * r * r * r * r -
          0.005050998 * r * r * r * r * r +
          0.0083572073 * r * r * r * r * r * r +
          i))
      : t > 1600 && 1700 >= t
      ? ((n = t - 1600), (s = 120 - 0.9808 * n - 0.01532 * t2 + t3 / 7129 + i))
      : t > 1700 && 1800 >= t
      ? ((n = t - 1800),
        (s =
          13.72 -
          0.332447 * n +
          0.0068612 * t2 +
          0.0041116 * t3 -
          37436e-8 * t4 +
          121272e-10 * t5 -
          1.699e-7 * t6 +
          8.75e-10 * t7 +
          i))
      : t > 1860 && 1900 >= t
      ? ((n = t - 1860),
        (s =
          7.62 +
          0.5737 * n -
          0.251754 * t2 +
          0.01680668 * t3 -
          0.0004473624 * t4 +
          t5 / 233174 +
          i))
      : t > 1900 && 1920 >= t
      ? ((n = t - 1920),
        (s = 21.2 + 0.84493 * n - 0.0761 * t2 + 0.0020936 * t3 + i))
      : t > 1941 && 1961 >= t
      ? ((n = t - 1950), (s = 29.07 + 0.407 * n - t2 / 233 + t3 / 2547))
      : t > 1961 && 1986 >= t
      ? ((n = t - 1975), (s = 45.45 + 1.067 * n - t2 / 260 - t3 / 718))
      : t > 1986 && 2005 >= t
      ? ((n = t - 2e3),
        (s =
          3.86 +
          0.3345 * n -
          0.060374 * t2 +
          0.0017275 * t3 +
          651814e-9 * t4 +
          2373599e-11 * t5))
      : t > 2005 && 2050 >= t
      ? ((n = t - 2e3), (s = 62.92 + 0.32217 * n + 0.005589 * t2 + i))
      : t > 2050 && 2150 >= t
      ? (s =
          -20 +
          32 * ((t - 1820) / 100) * ((t - 1820) / 100) -
          0.5628 * (2150 - t) +
          i)
      : t > 2150 && ((r = (t - 1820) / 100), (s = -20 + 32 * r * r + i)),
    s
  );
}
function dms2real(a, t, e) {
  var i;
  return (i = 0 > a ? a - t / 60 - e / 3600 : a + t / 60 + e / 3600);
}
function hms2deg(a, t, e) {
  return 15 * a + t / 4 + e / 240;
}
function dec2hms(a) {
  if (isNaN(a)) return "00:00:00";
  var t = a,
    e = t;
  t = t;
  var i = Math.floor(e);
  (e -= i), (e = 60 * e);
  var s = (Math.floor(e), Math.floor(t));
  (t -= s), (t = 60 * t);
  var r = Math.floor(t);
  (t -= r), (t = 60 * t);
  var n = Math.floor(t),
    h = (10 > s ? "0" : "") + s;
  return (h += (10 > r ? ":0" : ":") + r), (h += (10 > n ? ":0" : ":") + n);
}
function deg2hms(a) {
  if (isNaN(a)) return "00:00:00";
  var t = a,
    e = t;
  t /= 15;
  var i = Math.floor(e);
  (e -= i), (e = 60 * e);
  var s = (Math.floor(e), Math.floor(t));
  (t -= s), (t = 60 * t);
  var r = Math.floor(t);
  (t -= r), (t = 60 * t);
  var n = Math.floor(t),
    h = (10 > s ? "0" : "") + s;
  return (h += (10 > r ? ":0" : ":") + r), (h += (10 > n ? ":0" : ":") + n);
}
function dec2date(a) {
  if (isNaN(a)) return "00/00/0000";
  var t = a,
    e = Math.round(t),
    i = parseInt(date.getFullYear() - e);
  t -= e;
  var s = Math.round(12 * t),
    r = parseInt(12 - s + (date.getMonth() + 1) - 12);
  (isNaN(r) || 0 > r) && (r = 1);
  var n = Math.round(12 * t),
    h = Math.abs(n - 12 * t),
    o = Math.round(30 * h),
    l = Math.abs(30 - date.getDate() - o),
    c = (10 > l ? "0" : "") + l;
  return (c += (10 > r ? "/0" : "/") + r), (c += (1e3 > i ? "/0" : "/") + i);
}
function _abs(a) {
  var t;
  return (t = a >= 0 ? Math.floor(a) : Math.ceil(a));
}
function mod24(a) {
  return (a + 24) % 24;
}
function mod2pi(a) {
  var t = a / (2 * Math.PI),
    e = 2 * Math.PI * (t - _abs(t));
  return 0 > e && (e = 2 * Math.PI + e), e;
}
function mod360(a) {
  var t = 360 * (a / 360 - _abs(a / 360));
  return 0 > t && (t += 360), t;
}
function calc_moon_acending_node(a) {
  var t,
    e,
    i,
    s = new Date();
  return (
    (t = a
      ? (calc_julian_date(s.getHours(), s.getMinutes(), tz, a) - 2415020.5) /
        36525
      : (calc_julian_date(time.getHours(), time.getMinutes(), tz, a) -
          2415020.5) /
        36525),
    (e = calc_ayanamsa(a)),
    (i =
      mod2pi(
        (259.183275 - 1800 * t - 134.142008 * t + 0.002078 * t * t) * RADS
      ) * DEGS),
    i - e
  );
}
function calc_ayanamsa(a) {
  var t,
    e,
    i,
    s,
    r = new Date();
  a
    ? ((e = r.getFullYear()), (i = r.getMonth() + 1), (s = r.getDate()))
    : ((e = date.getFullYear()),
      (i = date.getMonth() + 1),
      (s = date.getDate())),
    (t = 100 > e ? 10 : 1e3);
  var n = (1 * e) / t,
    h = -6.92416 + 16.90709 * n - 0.757371 * n * n,
    o = (1.1574074 * (i + s / 30)) / t;
  return h + o;
}
function calc_ascendant(a, t, e) {
  var i = calc_sideral_time(a, t, e),
    s = _ecl(calc_julian_date(a, t, tz, e)),
    r = Math.atan2(
      Math.cos(i * RADS),
      -Math.sin(i * RADS) * Math.cos(s * RADS) -
        Math.tan(lat * RADS) * Math.sin(s * RADS)
    );
  return r * DEGS;
}
function calc_tithi(a) {
  var t = [
      "1/K.Pratipada/Pin.",
      "2/K.Dvitiya/Pin.",
      "3/K.Tritiya/Pin.",
      "4/K.Chaturthi/Ida",
      "5/K.Panchami/Ida",
      "6/K.Shashthi/Ida",
      "7/K.Saptami/Pin.",
      "8/K.Ashtami/Pin.",
      "9/K.Navami/Pin.",
      "10/K.Dasami/Ida",
      "11/K.Ekadasi/Ida",
      "12/K.Dwadasi/Ida",
      "13/K.Trayodasi/Pin.",
      "14/K.Chaturd./Pin.",
      "15/K.Amavasya/Pin.",
      "1/S.Pratipada/Ida",
      "2/S.Dvitiya/Ida",
      "3/S.Tritiya/Ida",
      "4/S.Chaturthi/Pin.",
      "5/S.Panchami/Pin.",
      "6/S.Shashthi/Pin.",
      "7/S.Saptami/Ida",
      "8/S.Ashtami/Ida",
      "9/S.Navami/Ida",
      "10/S.Dasami/Pin.",
      "11/S.Ekadasi/Pin.",
      "12/S.Dwadasi/Pin.",
      "13/S.Trayodasi/Ida",
      "14/S.Chaturd./Pin.",
      "15/S.Purnima/Ida",
    ],
    e = calc_ayanamsa(a),
    i = new Date();
  if (a) var s = calc_julian_date(i.getHours(), i.getMinutes(), tz, a);
  else var s = calc_julian_date(time.getHours(), time.getMinutes(), tz, a);
  var r = (calc_moon_positionIII(a) - e - (calc_vsop87(1, s) - e)) / 12;
  return (
    r > 15
      ? (r -= 15)
      : 15 > r && r > 0
      ? (r += 15)
      : r > 30
      ? (r -= 30)
      : 0 > r && (r = Math.round(Math.abs(2 * r))),
    t[Math.round(Math.abs(Math.floor(r)))]
  );
}
function calc_day_lord(a) {
  var t,
    e = calc_julian_date(time.getHours(), time.getMinutes(), 0, a),
    i = (Math.floor(e + 0.5) + 1) % 7;
  switch (i) {
    case 0:
      t = "Sun";
      break;
    case 1:
      t = "Moon";
      break;
    case 2:
      t = "Mars";
      break;
    case 3:
      t = "Mercury";
      break;
    case 4:
      t = "Jupiter";
      break;
    case 5:
      t = "Venus";
      break;
    case 6:
      t = "Shani";
      break;
    default:
      t = "NaN";
  }
  return t;
}
function calc_hora_lord(a) {
  var t,
    e,
    i = ["Sun", "Venus", "Mercury", "Moon", "Shani", "Jupiter", "Mars"],
    s = [],
    r = [],
    n = new Date();
  e = a
    ? n.getHours() + n.getMinutes() / 60
    : time.getHours() + time.getMinutes() / 60;
  var h = calc_day_lord(a),
    o = i.indexOf(h),
    l = calc_sunriseset(!0, !1, !1, a),
    c = calc_sunriseset(!1, !1, !1, a),
    d = calc_sunriseset(!0, !0, !1, a),
    m = (c - l) / 12,
    u = (24 - c + d) / 12;
  s[0] = l;
  for (var f = 1; 12 > f; f++) s[f] = s[f - 1] + m;
  s[12] = c;
  for (var f = 13; 25 > f; f++) s[f] = s[f - 1] + u;
  r[0] = i[o];
  for (var f = 1; 25 > f; f++) o > 5 && (o = -1), (r[f] = i[o + 1]), o++;
  for (var f = 0; 24 > f; f++)
    d > e && (e += 24), e >= s[f] && e <= s[f + 1] && (t = r[f]);
  return t;
}
function calc_sunriseset(a, t, e, i) {
  var s,
    r,
    n,
    h,
    o = 90 + 50 / 60,
    l = o,
    c = new Date();
  i
    ? ((s = c.getFullYear()),
      (r = c.getMonth() + 1),
      (n = c.getDate()),
      (h = -(c.getTimezoneOffset() / 60)))
    : ((s = date.getFullYear()),
      (r = date.getMonth() + 1),
      (n = date.getDate()),
      (h = tz));
  var d = Math.floor((275 * r) / 9),
    m = Math.floor((r + 9) / 12),
    u = 1 + Math.floor((s - 4 * Math.floor(s / 4) + 2) / 3),
    f = t ? d - u * m + (n + 1) - 30 : d - u * m + n - 30,
    M = lon / 15;
  if (a) var g = f + (6 - M) / 24;
  else var g = f + (18 - M) / 24;
  var p = 0.9856 * g - 3.289,
    v = mod360(
      p + 1.916 * Math.sin(p * RADS) + 0.02 * Math.sin(2 * p * RADS) + 282.634
    ),
    S = mod360(Math.atan(0.91764 * Math.tan(v * RADS)) * DEGS),
    _ = 90 * Math.floor(v / 90),
    y = 90 * Math.floor(S / 90);
  S = (S + (_ - y)) / 15;
  var D = 0.39782 * Math.sin(v * RADS),
    A = Math.cos(Math.asin(D) * DEGS * RADS),
    R =
      (Math.cos(l * RADS) - D * Math.sin(lat * RADS)) /
      (A * Math.cos(lat * RADS));
  if (R > 1) return "00:00:00";
  if (-1 > R) return "00:00:00";
  var x = a ? (360 - Math.acos(R) * DEGS) / 15 : (Math.acos(R) * DEGS) / 15,
    z = x + S - 0.06571 * g - 6.622,
    w = mod24(z - M) + 1 * h;
  0 > w && (w += 24), (w %= 24);
  var T,
    I,
    k,
    b = parseInt(w),
    E = 0,
    P = navigator.userAgent.toLowerCase();
  if (
    P.indexOf("firefox") > -1 ||
    P.indexOf("chrome") > -1 ||
    P.indexOf("msie") > -1
  ) {
    if (a)
      try {
        for (E = 0; 63 > E; E++)
          if (
            ((T = calc_julian_date(b, E, tz, i)),
            (k = Math.floor(
              h != tz ? calc_ascendant(b - 1, E, i) : calc_ascendant(b, E, i)
            )),
            (I = Math.floor(calc_vsop87(1, T))),
            0 > k && (k += 360),
            k > 360 && (k -= 360),
            0 > I && (I += 360),
            I > 360 && (I -= 360),
            I == k)
          ) {
            E++;
            break;
          }
      } catch (H) {
        return e ? dec2hms(w) : w;
      }
    if (!a)
      try {
        for (E = 0; 63 > E; E++)
          if (
            ((T = calc_julian_date(b, E, tz, i)),
            (k = Math.floor(
              h != tz ? calc_ascendant(b - 1, E, i) : calc_ascendant(b, E, i)
            )),
            (I = Math.floor(calc_vsop87(1, T)) + 180),
            0 > k && (k += 360),
            k > 360 && (k -= 360),
            0 > I && (I += 360),
            I > 360 && (I -= 360),
            I == k)
          ) {
            E++;
            break;
          }
      } catch (H) {
        return e ? dec2hms(w) : w;
      }
    return e ? dec2hms(b + E / 60) : b + E / 60;
  }
  return e ? dec2hms(w) : w;
}
function calc_vimsottari_dasa(a) {
  for (
    var t,
      e,
      i,
      s,
      r,
      n,
      h = ["Me", "Ke", "Ve", "Su", "Mo", "Ma", "Ra", "Ju", "Sa"],
      o = [
        6209.11643142495, 2556.69500117498, 7304.84286049994, 2191.45285814998,
        3652.42143024997, 2556.69500117498, 6574.35857444995, 5843.87428839995,
        6939.60071747494,
      ],
      l = calc_julian_date(time.getHours(), time.getMinutes(), 0, !1),
      c = (l - 2415020) / 36525,
      d =
        (27.321661547 + 1.857e-9 * date.getFullYear(),
        365.2421896698 -
          6.15359 * 1e-5 * c -
          7.29e-9 * c * c +
          2.64 * 1e-9 * c * c * c),
      m = calc_ayanamsa(!1),
      u = mod360(calc_moon_positionIII(!1) - m),
      f = calc_nakshatra(mygrahas[2].getra(), 4),
      M = calc_nakshatra(mygrahas[2].getra(), 2),
      g = h.indexOf(M),
      p = o[h.indexOf(M)],
      v = (u - f) / 13.3333,
      S = 1 - v,
      _ = Math.abs(v * (p / d)),
      y = 0,
      D = 0,
      A = M,
      R = new Date(),
      x = g,
      z = R.getFullYear() * d + 30 * (R.getMonth() + 1) + R.getDate(),
      w = date.getFullYear() * d + 30 * (date.getMonth() + 1) + date.getDate(),
      T = 0;
    9 > T;
    T++
  ) {
    if ((g > 8 && (g = 0), (y += o[g] / d / 120), y > v)) {
      t = h[g];
      break;
    }
    g++;
  }
  y = 1 - (y - v) / (o[g] / d / 120);
  for (var T = 0; 9 > T; T++) {
    if ((g > 8 && (g = 0), (D += o[g] / d / 120), D > y)) {
      e = h[g];
      break;
    }
    g++;
  }
  var I = S * o[x];
  (n = z - (w + I)), x++, (y = 0);
  for (var T = 0; 9 > T; T++) {
    if ((x > 8 && (x = 0), (y += o[x]), y > n)) {
      i = h[x];
      break;
    }
    x++;
  }
  (n = 1 - (y - n) / o[x]), (y = 0);
  for (var T = 0; 9 > T; T++) {
    if ((x > 8 && (x = 0), (y += o[x] / d / 120), y > n)) {
      s = h[x];
      break;
    }
    x++;
  }
  (D = 0), (y = 1 - (y - n) / (o[x] / d / 120));
  for (var T = 0; 9 > T; T++) {
    if ((x > 8 && (x = 0), (D += o[x] / d / 120), D > y)) {
      r = h[x];
      break;
    }
    x++;
  }
  var k = dec2date(_),
    b = " ";
  (b += (R.getDate() < 10 ? "0" : "") + R.getDate()),
    (b += (R.getMonth() + 1 < 10 ? "/0" : "/") + (R.getMonth() + 1)),
    (b += (R.getFullYear() < 1e3 ? "/0" : "/") + R.getFullYear());
  var E = A;
  return (
    (E += "/"),
    (E += t),
    (E += "/"),
    (E += e),
    (E += "     "),
    (E += i),
    (E += "/"),
    (E += s),
    (E += "/"),
    (E += r),
    a ? k + " " + b : E
  );
}
function onmousedown(a) {
  var t,
    e,
    i = "D",
    s = document.getElementById("canvas_chart"),
    r = s.getContext("2d");
  a.preventDefault(),
    a.layerX || 0 == a.layerX
      ? ((t = a.layerX), (e = a.layerY))
      : (a.offsetX || 0 == a.offsetX) && ((t = a.offsetX), (e = a.offsetY)),
    t > 277 && 309 > t && e > 610 && 623 > e
      ? (calc_position(!1), draw(!1))
      : t > 313 && 350 > t && e > 610 && 623 > e
      ? (calc_position(!0), draw(!0))
      : t > 600 && 621 > t && e > 610 && 623 > e
      ? (0 >= forward && (forward = 2),
        r.clearRect(300, 0, 300, 200),
        draw_empty_chart(r, s, 330, 0, 0.2),
        draw_division_chart(
          r,
          division[forward - 2],
          division[forward - 1],
          i + index[forward - 1]
        ),
        (forward -= 2))
      : t > 624 &&
        645 > t &&
        e > 610 &&
        623 > e &&
        (forward >= 10 && (forward = 8),
        r.clearRect(300, 0, 300, 200),
        draw_empty_chart(r, s, 330, 0, 0.2),
        draw_division_chart(
          r,
          division[forward],
          division[forward + 1],
          i + index[forward]
        ),
        (forward += 2));
}
function onkeydown(a) {
  27 == a.keyCode
    ? alert("esc")
    : 38 == a.keyCode
    ? alert("up")
    : 40 == a.keyCode
    ? alert("down")
    : 187 == a.keyCode
    ? alert("+")
    : 189 == a.keyCode && alert("-");
}
function draw(a) {
  var t = document.getElementById("canvas_info"),
    e = t.getContext("2d");
  t.onselectstart = function () {
    return !1;
  };
  var i = document.getElementById("canvas_chart"),
    s = i.getContext("2d");
  s.clearRect(0, 0, i.width, i.height),
    (i.onselectstart = function () {
      return !1;
    }),
    draw_info(e, t, a),
    console.log("🚀 ~ draw ~ e, t, a:", e, t, a);
  draw_empty_chart(s, i, 0, 0, 0.2),
    draw_zodiacs(s, "birth"),
    draw_houses(s, "birth"),
    draw_empty_chart(s, i, 330, 0, 0.2),
    draw_division_chart(s, mynavamsaz, mynavamsah, "D9");
  var lalCanvas = document.getElementById("canvas_lal"),
    lalContext = lalCanvas.getContext("2d");
  draw_empty_chart(lalContext, lalCanvas, 0, 0, 0.2);
  draw_zodiacs(lalContext, "lal"), draw_houses(lalContext, "lal");
  var kpCanvas = document.getElementById("canvas_kp"),
    kpContext = kpCanvas.getContext("2d");
  draw_empty_chart(kpContext, kpCanvas, 0, 0, 0.2);
  draw_zodiacs(kpContext, "kp"), draw_houses(kpContext, "kp");
}

function draw_zodiacs(a, name) {
  (a.font = "7pt Arial"), (a.textAlign = "center"), (a.fillStyle = "green");
  var t = [
    125, 93, 62, 43, 50, 54, 111, 104, 50, 154, 62, 165, 125, 117, 188, 165,
    200, 154, 139, 104, 200, 54, 188, 43,
  ];
  if (name == "birth") {
    myrashis = myrashis;
    console.log("🚀 ~ draw_zodiacs ~ myrashis: birth", myrashis);
  } else if (name == "kp") {
    myrashis = myhouseRashis;
    console.log("🚀 ~ draw_zodiacs ~ myhouseRashis: kp", myhouseRashis);
  } else if ((name = "lal")) {
    myrashis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    console.log("🚀 ~ draw_zodiacs ~ myrashis: lal", myrashis);
  } else {
    throw console.error("not a valid chart name");
  }
  a.fillText(myrashis[0], t[0], t[1]),
    a.fillText(myrashis[1], t[2], t[3]),
    a.fillText(myrashis[2], t[4], t[5]),
    a.fillText(myrashis[3], t[6], t[7]),
    a.fillText(myrashis[4], t[8], t[9]),
    a.fillText(myrashis[5], t[10], t[11]),
    a.fillText(myrashis[6], t[12], t[13]),
    a.fillText(myrashis[7], t[14], t[15]),
    a.fillText(myrashis[8], t[16], t[17]),
    a.fillText(myrashis[9], t[18], t[19]),
    a.fillText(myrashis[9], t[18], t[19]),
    a.fillText(myrashis[10], t[20], t[21]),
    a.fillText(myrashis[11], t[22], t[23]);
}
function draw_houses(a, name) {
  (a.font = "8pt Arial"), (a.textAlign = "center"), (a.fillStyle = "green");
  var t = [
    125, 53, 62, 13, 26, 54, 62, 104, 26, 154, 62, 195, 125, 154, 188, 195, 224,
    154, 189, 104, 224, 54, 188, 13,
  ];
  if (name == "birth") {
    mybhavas = mybhavas;
    console.log("🚀 ~ draw_houses ~ mybhavas: birth", mybhavas);
  } else if (name == "kp") {
    mybhavas = myHouseBhavas;
    console.log("🚀 ~ draw_houses ~ mybhavas: kp", mybhavas);
  } else if (name == "lal") {
    mybhavas = mybhavas;
    console.log("🚀 ~ draw_houses ~ mybhavas: lal", mybhavas);
    console.log(mybhavas, "yes");
  } else {
    throw console.error("not a valid chart name");
  }

  a.fillText(mybhavas[1], t[0], t[1]),
    a.fillText(mybhavas[2], t[2], t[3]),
    a.fillText(mybhavas[3], t[4], t[5]),
    a.fillText(mybhavas[4], t[6], t[7]),
    a.fillText(mybhavas[5], t[8], t[9]),
    a.fillText(mybhavas[6], t[10], t[11]),
    a.fillText(mybhavas[7], t[12], t[13]),
    a.fillText(mybhavas[8], t[14], t[15]),
    a.fillText(mybhavas[9], t[16], t[17]),
    a.fillText(mybhavas[10], t[18], t[19]),
    a.fillText(mybhavas[11], t[20], t[21]),
    a.fillText(mybhavas[12], t[22], t[23]);
}
function draw_info(a, t, e) {
  (a.font = "9pt Arial"), (a.textAlign = "left"), (a.fillStyle = "green");
  var i = new Date();
  ayamansa += calc_ayanamsa(e).toFixed(4);
  calc_house_position(ayamansa);
  a.clearRect(0, 0, t.width, t.height),
    t.addEventListener("keydown", onkeydown, !0),
    t.addEventListener("mousedown", onmousedown, !1),
    t.addEventListener("mouseup", function () {}),
    t.addEventListener("mousewheel", function () {}),
    t.addEventListener("mousemove", function () {}),
    t.addEventListener("contextmenu", function (a) {
      a.preventDefault();
    }),
    t.addEventListener("touchstart", function (a) {
      a.preventDefault();
    }),
    t.addEventListener("touchmove", function (a) {
      a.preventDefault();
    }),
    t.addEventListener("touchend", function (a) {
      a.preventDefault();
    });
  for (var s = 10, r = 0; 9 >= r; r++)
    a.fillText(mygrahas[r].name, 2, s), (s += 15);
  (a.textAlign = "end"), (s = 10);
  for (var r = 0; 9 >= r; r++)
    a.fillText(Math.floor(mygrahas[r].getdegree()) + "°", 52, s), (s += 15);
  (a.textAlign = "start"), (s = 10);
  for (var r = 0; 9 >= r; r++)
    a.fillText(mygrahas[r].getzodiac(), 57, s), (s += 15);
  (a.textAlign = "end"), (s = 10);
  for (var r = 0; 9 >= r; r++)
    a.fillText(mygrahas[r].ra.toFixed(3) + "°", 170, s), (s += 15);
  s = 10;
  for (var r = 0; 9 >= r; r++)
    a.fillText(mygrahas[r].retro, 26.5, s), (s += 15);
  (a.textAlign = "left"), (s = 10);
  for (var r = 0; 9 >= r; r++)
    a.fillText("[ " + mygrahas[r].range + " ]", 175, s), (s += 15);
  (a.textAlign = "left"), (s = 10);
  for (var r = 0; 9 >= r; r++) a.fillText(mynaksha[r], 245, s), (s += 15);
  (a.textAlign = "left"), (s = 10);
  for (var r = 0; 9 >= r; r++) a.fillText(mynakshap[r], 305, s), (s += 15);
  (a.textAlign = "left"), (s = 10);
  for (var r = 0; 9 >= r; r++) a.fillText(mynakshal[r], 315, s), (s += 15);
  (a.textAlign = "left"), (s = 25);
  for (var r = 1; 9 >= r; r++)
    a.fillText(mygrahas[r].happy_zodiac, 340, s), (s += 15);
  (a.textAlign = "end"), (s = 25);
  for (var r = 1; 9 >= r; r++)
    a.fillText(mygrahas[r].good_friend + ":)", 450, s), (s += 15);
  (a.textAlign = "left"), (s = 25);
  for (var r = 1; 9 >= r; r++)
    a.fillText(mygrahas[r].sad_zodiac, 460, s), (s += 15);
  (a.textAlign = "end"), (s = 25);
  for (var r = 1; 9 >= r; r++)
    a.fillText(mygrahas[r].bad_friend + ":(", 560, s), (s += 15);
  (a.textAlign = "end"), (s = 25);
  for (var r = 1; 9 >= r; r++)
    a.fillText(mygrahas[r].aspect, 614, s), (s += 15);
  (a.textAlign = "left"),
    a.fillText("Ayanamsa:" + ayamansa + "°", 2, 170),
    e
      ? a.fillText(
          "Sid. time:   " +
            deg2hms(calc_sideral_time(i.getHours(), i.getMinutes(), e)),
          2,
          185
        )
      : a.fillText(
          "Sid. time:   " +
            deg2hms(calc_sideral_time(time.getHours(), time.getMinutes(), e)),
          2,
          185
        ),
    a.fillText("Sunrise:" + calc_sunriseset(!0, !1, !0, e), 120, 170),
    a.fillText("Sunset: " + calc_sunriseset(!1, !1, !0, e), 120, 185),
    a.fillText("Day   Lord:" + calc_day_lord(e), 223, 170),
    a.fillText("Hora Lord:" + calc_hora_lord(e), 223, 185),
    a.fillText("House Positions: " + "ho", 223, 200),
    a.fillText("Tithi:" + calc_tithi(e), 330, 185),
    a.fillText("Weekday:" + calc_day_of_the_week(e), 330, 170),
    e ||
      (a.fillText("Dasa:" + calc_vimsottari_dasa(!1), 461, 170),
      a.fillText("Dasa:" + calc_vimsottari_dasa(!0), 461, 185));
}
function draw_empty_chart(a, t, e, i, s) {
  (a.lineWidth = s),
    (a.strokeStyle = "606060"),
    (a.shadowColor = "white"),
    (a.shadowBlur = 1),
    t.addEventListener("contextmenu", function (a) {
      a.preventDefault();
    }),
    t.addEventListener("mousedown", onmousedown, !1);
  var r = e,
    n = i;
  a.beginPath(),
    a.moveTo(r, n),
    a.lineTo(r + 250, n),
    a.lineTo(r + 250, n + 200),
    a.lineTo(r, n + 200),
    a.lineTo(r, n),
    (a.lineJoin = "round"),
    a.stroke(),
    a.beginPath(),
    a.moveTo(r, n + 100),
    a.lineTo(r + 125, n),
    a.lineTo(r + 250, n + 100),
    a.lineTo(r + 125, n + 200),
    a.lineTo(r, n + 100),
    (a.lineJoin = "round"),
    a.stroke(),
    a.beginPath(),
    a.moveTo(r, n),
    a.lineTo(r + 250, n + 200),
    a.stroke(),
    a.beginPath(),
    a.moveTo(r, n + 200),
    a.lineTo(r + 250, n),
    a.stroke();
}
function draw_division_chart(a, t, e, i) {
  (a.font = "7pt Arial"), (a.textAlign = "center");
  var s = 330,
    r = [
      125, 93, 62, 43, 50, 54, 111, 104, 50, 154, 62, 165, 125, 117, 188, 165,
      200, 154, 139, 104, 200, 54, 188, 43,
    ];
  a.fillText(t[0], r[0] + s, r[1]),
    a.fillText(t[1], r[2] + s, r[3]),
    a.fillText(t[2], r[4] + s, r[5]),
    a.fillText(t[3], r[6] + s, r[7]),
    a.fillText(t[4], r[8] + s, r[9]),
    a.fillText(t[5], r[10] + s, r[11]),
    a.fillText(t[6], r[12] + s, r[13]),
    a.fillText(t[7], r[14] + s, r[15]),
    a.fillText(t[8], r[16] + s, r[17]),
    a.fillText(t[9], r[18] + s, r[19]),
    a.fillText(t[9], r[18] + s, r[19]),
    a.fillText(t[10], r[20] + s, r[21]),
    a.fillText(t[11], r[22] + s, r[23]),
    (a.font = "8pt Arial"),
    (a.textAlign = "center");
  var r = [
    125, 53, 62, 13, 26, 54, 62, 104, 26, 154, 62, 195, 125, 154, 188, 195, 224,
    154, 189, 104, 224, 54, 188, 13,
  ];
  a.fillText(e[1], r[0] + s, r[1]),
    a.fillText(e[2], r[2] + s, r[3]),
    a.fillText(e[3], r[4] + s, r[5]),
    a.fillText(e[4], r[6] + s, r[7]),
    a.fillText(e[5], r[8] + s, r[9]),
    a.fillText(e[6], r[10] + s, r[11]),
    a.fillText(e[7], r[12] + s, r[13]),
    a.fillText(e[8], r[14] + s, r[15]),
    a.fillText(e[9], r[16] + s, r[17]),
    a.fillText(e[10], r[18] + s, r[19]),
    a.fillText(e[11], r[20] + s, r[21]),
    a.fillText(e[12], r[22] + s, r[23]),
    (a.textAlign = "left"),
    a.fillText("natal  |  transit", 2, 209),
    (a.textAlign = "center"),
    a.fillText(i, r[0] + s, 105),
    (a.textAlign = "left"),
    a.fillText("-       +", s, 209);
}
function draw_smile(a) {
  a.beginPath(),
    (a.strokeStyle = "606060"),
    a.arc(456, 55, 17, 0.9 * Math.PI, 2.1 * Math.PI, !0),
    (a.lineWidth = 0.1),
    a.stroke(),
    a.beginPath(),
    a.arc(455, 59, 21, -Math.PI, Math.PI, !0),
    (a.lineWidth = 0.1),
    a.stroke(),
    (a.fillStyle = "F2F2F2"),
    a.fillText(".", 447, 54),
    a.fillText(".", 463, 54);
}
var name,
  date,
  time,
  tz,
  lat,
  lon,
  latdir,
  londir,
  lattmp,
  lontmp,
  dn,
  forward = 0,
  DEGS = 180 / Math.PI,
  RADS = Math.PI / 180,
  EPS = 1e-12,
  planets = [],
  mygrahas = [],
  mybhavas = [],
  myHouseBhavas = [],
  myrashis = [],
  myhouseRashis = [],
  myhoraz = [],
  myhorah = [],
  mysashthamshaz = [],
  mysashthamshah = [],
  myashthamsaz = [],
  myashthamsah = [],
  mynavamsaz = [],
  mynavamsah = [],
  mydwadashamsaz = [],
  mydwadashamsah = [],
  mynaksha = [],
  mynakshal = [],
  mynakshap = [],
  myhouse = [],
  ayamansa = 0,
  index = [2, 2, 6, 6, 8, 8, 9, 9, 12, 12],
  division = [
    myhoraz,
    myhorah,
    mysashthamshaz,
    mysashthamshah,
    myashthamsaz,
    myashthamsah,
    mynavamsaz,
    mynavamsah,
    mydwadashamsaz,
    mydwadashamsah,
  ],
  AS = 0,
  SU = 1,
  MO = 2,
  MA = 3,
  ME = 4,
  JU = 5,
  VE = 6,
  SA = 7,
  RA = 8,
  KE = 9,
  Aries = 1,
  Taurus = 2,
  Gemini = 3,
  Cancer = 4,
  Leo = 5,
  Virgo = 6,
  Libra = 7,
  Scorpio = 8,
  Sagittarius = 9,
  Capricorn = 10,
  Aquarius = 11,
  Pisces = 12,
  MAXZOD = 12,
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
  H7 = 7,
  H8 = 8,
  H9 = 9,
  H10 = 10,
  H11 = 11,
  H12 = 12,
  MAXH = 12,
  Ashvini = 1,
  Bharani = 2,
  Krittika = 3,
  Rohini = 4,
  Mrigashira = 5,
  Ardra = 6,
  Punarvasu = 7,
  Pushya = 8,
  Ashlesha = 9,
  Magha = 10,
  PurvaPhalguni = 11,
  UttaraPhalguni = 12,
  Hasta = 13,
  Chitra = 14,
  Svati = 15,
  Vishakha = 16,
  Anuradha = 17,
  Jyeshtha = 18,
  Mula = 19,
  PurvaShadha = 20,
  UttaraShadha = 21,
  Sravana = 22,
  Dhanista = 23,
  Shatabhisha = 24,
  PurvaBhadra = 25,
  UttaraBhadra = 26,
  Revati = 27,
  MAXNAKSHA = 27;
