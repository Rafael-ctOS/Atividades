import 'package:flutter/material.dart';
import 'package:va3_mobile/widgets/home_nav_bar.dart';
import 'package:va3_mobile/widgets/items_widget.dart';
import 'package:va3_mobile/widgets/home_widget.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        backgroundColor: Color(0xFF0F033D),
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.only(top: 25),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 15),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      InkWell(
                        onTap: () {},
                        child: Icon(
                          Icons.add_box_sharp,
                          color: Color(0xFFE7FF0F),
                          size: 35,
                        ),
                      ),
                      InkWell(
                        onTap: () {},
                        child: Icon(
                          Icons.search,
                          color: Color(0xFFE7FF0F),
                          size: 35,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 30),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 15),
                  child: Text(
                    "Mobile Burguers",
                    style: TextStyle(
                      color: const Color.fromARGB(255, 179, 164, 31),
                      fontSize: 32,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                SizedBox(height: 5),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 15),
                  child: Text(
                    "Mega-Fome. Qualquer Hamburguer por apenas \R\$45",
                    style: TextStyle(
                      color: Color.fromARGB(255, 151, 143, 72),
                      fontSize: 20,
                    ),
                  ),
                ),
                SizedBox(height: 30),
                TabBar(
                  isScrollable: true,
                  //indicator: BoxDecoration(),
                  labelStyle: TextStyle(fontSize: 17.5),
                  labelPadding: EdgeInsets.symmetric(horizontal: 20),
                  tabs: [
                    Tab(text: "Home"),
                    Tab(text: "Artesanal"),
                    Tab(text: "Tradicional"),
                    Tab(text: "Vegano"),
                  ],
                ),
                Flexible(
                  flex: 1,
                  child: TabBarView(
                    children: [
                      Homewidget(),
                      Itemswidget(),
                      Itemswidget(),
                      Itemswidget(),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        //bottomNavigationBar: HomeNavBar(), Caso queira colocar um footer, usa essa tag(acho que é tag qeu se chama kk)
      ),
    );
  }
}


//