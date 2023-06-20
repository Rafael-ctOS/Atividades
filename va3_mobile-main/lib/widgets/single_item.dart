import 'package:flutter/material.dart';

class SingleItemNavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 130,
      padding: EdgeInsets.symmetric(horizontal: 15),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            children: [
              Text(
                "Total",
                style: TextStyle(
                  color: Colors.white70,
                  fontSize: 22,
                ),
              ),
              SizedBox(height: 10),
              Text(
                "R\$ 90",
                style: TextStyle(
                  color: Colors.white70,
                  fontSize: 19,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          Container(
            padding: EdgeInsets.symmetric(vertical: 15, horizontal: 10),
            decoration: BoxDecoration(
              color: Color(0xFFEFB322),
              // borderRadius: BorderRadius.only(
              // topRight: Radius.circular(20),
              // ),
            ),
            child: Row(
              children: [
                Text(
                  "COMPRAR",
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
