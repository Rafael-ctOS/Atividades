import 'dart:ffi';

import 'package:flutter/services.dart';
import 'package:va3_mobile/Pages/home_pages.dart';
import 'package:flutter/material.dart';
import 'package:va3_mobile/Pages/item_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        "/": (context) => HomePage(),
        "singleItemPage": (context) => SingleItemPage(),
      },
    );
  }
}
