import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'screens/splash_screen.dart';
import 'screens/dashboard_screen.dart';
import 'screens/lead_engine_screen.dart';
import 'screens/ai_lab_screen.dart';
import 'screens/pipeline_screen.dart';
import 'screens/billing_screen.dart';

void main() {
  runApp(const SmartLeadApp());
}

class SmartLeadApp extends StatelessWidget {
  const SmartLeadApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SmartLead AI',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xFFFAFAFB),
        textTheme: GoogleFonts.interTextTheme(Theme.of(context).textTheme),
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFFFFFF00)),
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
      ),
      home: const AppEntry(),
    );
  }
}

// ── Entry point: shows splash then main shell ─────────────────────────────
class AppEntry extends StatefulWidget {
  const AppEntry({Key? key}) : super(key: key);

  @override
  State<AppEntry> createState() => _AppEntryState();
}

class _AppEntryState extends State<AppEntry> {
  bool _splashDone = false;

  @override
  Widget build(BuildContext context) {
    if (!_splashDone) {
      return SplashScreen(onDone: () {
        if (mounted) setState(() => _splashDone = true);
      });
    }
    return const MainShell();
  }
}

// ── Main bottom-nav shell ─────────────────────────────────────────────────
class MainShell extends StatefulWidget {
  const MainShell({Key? key}) : super(key: key);

  @override
  State<MainShell> createState() => _MainShellState();
}

class _MainShellState extends State<MainShell> {
  int _index = 0;

  static const _screens = [
    DashboardScreen(),
    LeadEngineScreen(),
    AILabScreen(),
    PipelineScreen(),
    BillingScreen(),
  ];

  static const _navItems = [
    _NavItem(Icons.home_filled,   'HOME'),
    _NavItem(Icons.people_alt,    'LEADS'),
    _NavItem(Icons.auto_awesome,  'LAB'),
    _NavItem(Icons.timeline,      'PIPELINE'),
    _NavItem(Icons.receipt_long,  'BILLING'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(index: _index, children: _screens),
      bottomNavigationBar: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: const BoxDecoration(
            color: Colors.white,
            border: Border(top: BorderSide(color: Color(0xFFF3F4F6))),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: List.generate(_navItems.length, (i) {
              final item   = _navItems[i];
              final active = i == _index;
              return GestureDetector(
                onTap: () => setState(() => _index = i),
                behavior: HitTestBehavior.opaque,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      decoration: BoxDecoration(
                        color: active ? const Color(0xFFFFFF00) : Colors.transparent,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(item.icon,
                        color: active ? Colors.black : const Color(0xFF9CA3AF),
                        size: 24),
                    ),
                    const SizedBox(height: 4),
                    Text(item.label,
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.w800,
                        letterSpacing: 0.5,
                        color: active ? Colors.black : const Color(0xFF9CA3AF),
                      )),
                  ],
                ),
              );
            }),
          ),
        ),
      ),
    );
  }
}

class _NavItem {
  final IconData icon;
  final String   label;
  const _NavItem(this.icon, this.label);
}
