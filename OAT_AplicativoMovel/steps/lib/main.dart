import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Navegação entre telas',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => HomeScreen(),
        '/second': (context) => SecondScreen(),
      },
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Tela Inicial'),
          bottom: TabBar(
            tabs: [
              Tab(
                text: 'Aba 1',
                icon: Icon(Icons.home),
              ),
              Tab(
                text: 'Aba 2',
                icon: Icon(Icons.settings),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Aqui você por ir para a segunda tela',
                    style: TextStyle(fontSize: 20),
                  ),
                  ElevatedButton(
                    child: Text('Ir para a Segunda Tela'),
                    onPressed: () {
                      Navigator.pushNamed(context, '/second');
                    },
                  ),
                ],
              ),
            ),
            Center(
              child: Text('Conteúdo da Aba 2', style: TextStyle(fontSize: 20)),
            ),
          ],
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Text('Segunda Tela'),
          bottom: TabBar(
            tabs: [
              Tab(
                text: 'Aba 1',
                icon: Icon(Icons.home),
              ),
              Tab(
                text: 'Aba 2',
                icon: Icon(Icons.settings),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(
              child: Text('Conteúdo da Aba 1', style: TextStyle(fontSize: 20)),
            ),
            Center(
              child: Text('Conteúdo da Aba 2', style: TextStyle(fontSize: 20)),
            ),
          ],
        ),
      ),
    );
  }
}
