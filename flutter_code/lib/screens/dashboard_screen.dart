import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../services/api_service.dart';
import 'lead_profile_screen.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({Key? key}) : super(key: key);

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  Map<String, dynamic> stats = {
    'totalLeads': 1200,
    'aiMessages': 856,
    'outreachSent': 432,
    'replies': 98,
    'conversionRate': 12.5,
  };
  bool loading = true;

  @override
  void initState() {
    super.initState();
    _loadStats();
  }

  Future<void> _loadStats() async {
    final s = await ApiService.getDashboardStats();
    if (mounted) setState(() { stats = s; loading = false; });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kBg,
      body: RefreshIndicator(
        color: kBlack,
        onRefresh: _loadStats,
        child: CustomScrollView(
          slivers: [
            // ── Yellow Header ──────────────────────────────────
            SliverToBoxAdapter(
              child: Container(
                color: kYellow,
                padding: const EdgeInsets.fromLTRB(20, 52, 20, 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Container(width: 28, height: 28, decoration: const BoxDecoration(color: kBlack, shape: BoxShape.circle), child: const Icon(Icons.bolt, color: kYellow, size: 16)),
                            const SizedBox(width: 10),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('DELIVERING LEADS IN', style: kHeading(9, weight: FontWeight.w900)),
                                Text('8 Minutes ▾', style: kHeading(14, weight: FontWeight.w900)),
                              ],
                            ),
                          ],
                        ),
                        Container(
                          width: 36, height: 36,
                          decoration: const BoxDecoration(color: kBlack, shape: BoxShape.circle),
                          child: const Icon(Icons.person, color: kWhite, size: 18),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      decoration: BoxDecoration(color: kWhite, borderRadius: BorderRadius.circular(12), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10)]),
                      child: Row(
                        children: [
                          const Icon(Icons.search, color: kGrey, size: 20),
                          const SizedBox(width: 10),
                          Expanded(child: Text("Search for 'Real Estate Leads' or 'AI Agents'", style: kBody(13, color: kGrey))),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // ── Campaign Performance ───────────────────────────
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 24, 20, 0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('Campaign Performance', style: kHeading(16)),
                        Text('SEE ALL ›', style: kBody(11, color: kGrey, weight: FontWeight.w800)),
                      ],
                    ),
                    const SizedBox(height: 20),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        statBubble('1.2k', 'Leads Scraped', const Color(0xFFEFF6FF), kBlue),
                        statBubble('856', 'AI Messages', const Color(0xFFECFDF5), kGreen),
                        statBubble('432', 'Outreach Sent', const Color(0xFFF5F3FF), kPurple),
                        statBubble('98', 'Replies', const Color(0xFFFFF7ED), const Color(0xFFEA580C)),
                      ],
                    ),
                    const SizedBox(height: 20),
                    // Conversion Rate Card
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: kYellow.withOpacity(0.3), blurRadius: 16, offset: const Offset(0, 6))]),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                Text('CONVERSION RATE', style: kHeading(12, weight: FontWeight.w900)),
                                Text('CURRENT PERFORMANCE', style: kBody(9, color: kBlack, weight: FontWeight.w800)),
                              ]),
                              Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5), decoration: BoxDecoration(color: const Color(0xFFFFF580), borderRadius: BorderRadius.circular(8)), child: Text('Top 5%', style: kHeading(12, weight: FontWeight.w900))),
                            ],
                          ),
                          const SizedBox(height: 14),
                          Row(
                            children: [
                              Expanded(
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(6),
                                  child: LinearProgressIndicator(value: 0.85, minHeight: 10, backgroundColor: const Color(0xFFFFF580), valueColor: const AlwaysStoppedAnimation<Color>(kBlack)),
                                ),
                              ),
                              const SizedBox(width: 10),
                              Text('12.5%', style: kHeading(18)),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text('Goal: 15%', style: kHeading(11, weight: FontWeight.w700)),
                              Text('↗ +2.1% this week', style: kHeading(11, weight: FontWeight.w700)),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // ── Quick Actions ──────────────────────────────────
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 28, 20, 0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Quick Actions', style: kHeading(18)),
                    const SizedBox(height: 16),
                    GridView.count(
                      crossAxisCount: 2,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                      childAspectRatio: 1.6,
                      children: [
                        _actionCard('New Campaign', const Color(0xFF4A5A6A)),
                        _actionCard('View Analytics', const Color(0xFF5C8A9A)),
                        _actionCard('Lead Scraper', const Color(0xFF707070)),
                        _actionCard('AI Training', const Color(0xFF2D3748)),
                      ],
                    ),
                  ],
                ),
              ),
            ),

            // ── Recent Activity ────────────────────────────────
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 28, 20, 32),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Recent Activity', style: kHeading(18)),
                    const SizedBox(height: 16),
                    _activityRow(Icons.mail_rounded, const Color(0xFFFFFBEB), 'New Reply Received', '"Hey, I\'m interested in the property you mentioned..."', '2M AGO'),
                    const SizedBox(height: 20),
                    _activityRow(Icons.person_add, const Color(0xFFECFDF5), '24 New Leads Added', 'Real Estate Campaign: South Jersey Area', '45M AGO', iconColor: kGreen),
                    const SizedBox(height: 20),
                    _activityRow(Icons.smart_toy, const Color(0xFFEFF6FF), 'AI Response Sent', 'Personalized follow-up sent to Mark Henderson.', '1H AGO', iconColor: kBlue),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _actionCard(String title, Color bg) => Container(
    decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(20)),
    alignment: Alignment.bottomLeft,
    padding: const EdgeInsets.all(16),
    child: Text(title, style: kHeading(14, color: kWhite)),
  );

  Widget _activityRow(IconData icon, Color bg, String title, String desc, String time, {Color iconColor = kBlack}) => Row(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Container(width: 44, height: 44, decoration: BoxDecoration(color: bg, shape: BoxShape.circle), child: Icon(icon, size: 20, color: iconColor)),
      const SizedBox(width: 14),
      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(title, style: kHeading(14, weight: FontWeight.w800)),
                Text(time, style: kBody(10, weight: FontWeight.w700)),
              ],
            ),
            const SizedBox(height: 4),
            Text(desc, style: kBody(12), maxLines: 2, overflow: TextOverflow.ellipsis),
          ],
        ),
      ),
    ],
  );
}
