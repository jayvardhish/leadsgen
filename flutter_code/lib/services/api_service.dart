import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://10.0.2.2:5000/api'; // 10.0.2.2 = localhost for Android emulator

  // ── LEADS ──────────────────────────────────────────────────────────────────

  static Future<List<Map<String, dynamic>>> getLeads() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/leads'));
      if (response.statusCode == 200) {
        return List<Map<String, dynamic>>.from(json.decode(response.body));
      }
    } catch (e) {
      print('getLeads error: $e');
    }
    // Fallback mock data
    return [
      {'_id': '1', 'name': 'Fresh Mart Supermarket', 'type': 'Retail & FMCG Chain', 'location': 'Bengaluru', 'distance': '2.4km', 'website': true, 'phone': '+91 9876543210', 'email': 'contact@freshmart.in', 'score': 92, 'verified': true, 'img': 'FM'},
      {'_id': '2', 'name': 'Apex Digital Agency', 'type': 'B2B Services', 'location': 'Mumbai', 'distance': '12km', 'website': true, 'phone': '+91 8765432109', 'email': 'hello@apexdigital.in', 'score': 88, 'verified': false, 'img': 'AD'},
      {'_id': '3', 'name': 'Kochi Tech Solutions', 'type': 'IT Consulting', 'location': 'Kochi', 'distance': '850km', 'website': true, 'phone': '+91 7654321098', 'email': 'sales@kochitech.com', 'score': 95, 'verified': true, 'img': 'KT'},
      {'_id': '4', 'name': 'Metro Clinic Hospital', 'type': 'Healthcare', 'location': 'Delhi', 'distance': '1100km', 'website': false, 'phone': '+91 6543210987', 'email': null, 'score': 72, 'verified': false, 'img': 'MC'},
    ];
  }

  static Future<Map<String, dynamic>> scrapeLeads(String query) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/scrape'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'query': query}),
      );
      if (response.statusCode == 200) {
        return json.decode(response.body);
      }
    } catch (e) {
      print('scrapeLeads error: $e');
    }
    return {'message': 'Scraping complete (offline)', 'count': 2};
  }

  // ── AI MESSAGE ─────────────────────────────────────────────────────────────

  static Future<String> generateMessage({
    required Map<String, dynamic> lead,
    required String context,
    required String tone,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/generate-message'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'leadDetails': lead,
          'context': context,
          'tone': tone,
          'creativity': 75,
        }),
      );
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        return data['message'] ?? '';
      }
    } catch (e) {
      print('generateMessage error: $e');
    }
    // Offline fallback
    await Future.delayed(const Duration(milliseconds: 1500));
    final name = (lead['name'] as String).split(' ').first;
    return "Hi $name,\n\nI noticed you're doing great with ${lead['type']} in ${lead['location']}. As your business scales, managing leads efficiently becomes critical.\n\nWe provide an AI automation tool that can skyrocket your conversions. Would you be open to a 5-minute chat?\n\nBest,\nAgent";
  }

  // ── STATS ──────────────────────────────────────────────────────────────────

  static Future<Map<String, dynamic>> getDashboardStats() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/stats'));
      if (response.statusCode == 200) {
        return json.decode(response.body);
      }
    } catch (e) {
      print('getDashboardStats error: $e');
    }
    return {
      'totalLeads': 1200,
      'aiMessages': 856,
      'outreachSent': 432,
      'replies': 98,
      'conversionRate': 12.5,
    };
  }
}
