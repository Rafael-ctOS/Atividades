import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Homewidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 0),
      height: 457,
      color: Color(0xFFAABD3D),
      child: Container(
        child: Image.asset(
          "assets/images/home-burguer.png",
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
