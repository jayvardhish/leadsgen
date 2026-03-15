import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../services/api_service.dart';
import 'lead_profile_screen.dart';

class LeadEngineScreen extends StatefulWidget {
  const LeadEngineScreen({Key? key}) : super(key: key);

  @override
  State<LeadEngineScreen> createState() => _LeadEngineScreenState();
}

class _LeadEngineScreenState extends State<LeadEngineScreen> {
  List<Map<String, dynamic>> leads = [];
  bool loading = false;
  bool searched = false;
  final TextEditingController _controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    _loadLeads();
  }

  Future<void> _loadLeads() async {
    final data = await ApiService.getLeads();
    if (mounted) setState(() { leads = data; if (data.isNotEmpty) searched = true; });
  }

  Future<void> _scrape() async {
    setState(() => loading = true);
    await ApiService.scrapeLeads(_controller.text.isEmpty ? 'Restaurants' : _controller.text);
    await _loadLeads();
    setState(() { loading = false; searched = true; });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      body: Column(
        children: [
          // Header
          Container(
            padding: const EdgeInsets.fromLTRB(20, 52, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Lead Engine', style: kHeading(26)),
                const SizedBox(height: 16),
                AppCard(
                  border: Border.all(color: kBlack, width: 2),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          const Icon(Icons.search, color: kGrey, size: 20),
                          const SizedBox(width: 10),
                          Expanded(
                            child: TextField(
                              controller: _controller,
                              style: kHeading(16, weight: FontWeight.w600),
                              decoration: const InputDecoration(
                                hintText: 'e.g. Restaurants in Delhi',
                                border: InputBorder.none,
                                isDense: true,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: () {},
                              icon: const Icon(Icons.filter_list, size: 16, color: kBlack),
                              label: Text('Source', style: kHeading(14, weight: FontWeight.w700)),
                              style: OutlinedButton.styleFrom(
                                side: const BorderSide(color: kBlack),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                                padding: const EdgeInsets.symmetric(vertical: 12),
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            flex: 2,
                            child: GestureDetector(
                              onTap: loading ? null : _scrape,
                              child: Container(
                                padding: const EdgeInsets.symmetric(vertical: 12),
                                decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(10)),
                                child: loading
                                    ? const Center(child: SizedBox(width: 20, height: 20, child: CircularProgressIndicator(color: kBlack, strokeWidth: 2)))
                                    : Text('Scrape Now', style: kHeading(14, weight: FontWeight.w800), textAlign: TextAlign.center),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Results
          if (searched)
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  RichText(text: TextSpan(text: 'found ', style: kHeading(18, color: kBlack, weight: FontWeight.w600), children: [
                    TextSpan(text: '${leads.length}', style: kHeading(18, color: kGreen)),
                    const TextSpan(text: ' leads'),
                  ])),
                  yellowBadge('Top ${leads.length > 4 ? 4 : leads.length} shown'),
                ],
              ),
            ),

          if (!searched && !loading)
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.language, size: 52, color: Color(0xFFD1D5DB)),
                  const SizedBox(height: 16),
                  Text('Enter niche & location\nto start scraping', style: kBody(14, weight: FontWeight.w600), textAlign: TextAlign.center),
                ],
              ),
            ),

          if (searched)
            Expanded(
              child: ListView.builder(
                padding: const EdgeInsets.fromLTRB(20, 16, 20, 32),
                itemCount: leads.length,
                itemBuilder: (_, i) => _leadCard(leads[i]),
              ),
            ),
        ],
      ),
    );
  }

  Widget _leadCard(Map<String, dynamic> lead) => GestureDetector(
    onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => LeadProfileScreen(lead: lead))),
    child: Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(color: kWhite, borderRadius: BorderRadius.circular(20), border: Border.all(color: kGreyLight), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 8)]),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                Container(
                  width: 64, height: 64,
                  decoration: BoxDecoration(color: const Color(0xFFF0F0F5), borderRadius: BorderRadius.circular(12), border: Border.all(color: kGreyLight)),
                  child: Center(child: Text(lead['img'] ?? (lead['name'] as String).substring(0, 2).toUpperCase(), style: kHeading(20, color: Colors.grey.shade400))),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Expanded(child: Text(lead['name'] ?? '', style: kHeading(15, weight: FontWeight.w800), maxLines: 1, overflow: TextOverflow.ellipsis)),
                          if (lead['verified'] == true) const Icon(Icons.verified, color: kYellow, size: 18),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Text(lead['type'] ?? '', style: kBody(12, weight: FontWeight.w700)),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          const Icon(Icons.location_on, size: 13, color: kGrey),
                          Text(' ${lead['distance'] ?? ''}', style: kBody(12)),
                          const SizedBox(width: 12),
                          const Icon(Icons.language, size: 13, color: kGrey),
                          Text(' ${lead['website'] == true ? 'Web' : 'No Web'}', style: kBody(12)),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Divider(color: const Color(0xFFF0F0F5), height: 1, thickness: 1),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 10, 16, 12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    if (lead['phone'] != null) Container(padding: const EdgeInsets.all(6), decoration: const BoxDecoration(color: Color(0xFFF0F0F0), shape: BoxShape.circle), child: const Icon(Icons.phone, size: 14)),
                    if (lead['phone'] != null) const SizedBox(width: 8),
                    if (lead['email'] != null) Container(padding: const EdgeInsets.all(6), decoration: const BoxDecoration(color: Color(0xFFF0F0F0), shape: BoxShape.circle), child: const Icon(Icons.mail, size: 14)),
                  ],
                ),
                Row(
                  children: [
                    Text('AI SCORE: ', style: kBody(11, weight: FontWeight.w800, color: kBlack)),
                    Text('${lead['score']}/100', style: kHeading(11, color: (lead['score'] ?? 0) > 90 ? kGreen : kBlack, weight: FontWeight.w900)),
                    const SizedBox(width: 4),
                    const Icon(Icons.chevron_right, size: 18, color: kGrey),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    ),
  );
}
