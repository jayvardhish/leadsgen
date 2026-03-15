import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../services/api_service.dart';
import 'package:url_launcher/url_launcher.dart';

class LeadProfileScreen extends StatefulWidget {
  final Map<String, dynamic> lead;
  const LeadProfileScreen({Key? key, required this.lead}) : super(key: key);

  @override
  State<LeadProfileScreen> createState() => _LeadProfileScreenState();
}

class _LeadProfileScreenState extends State<LeadProfileScreen> {
  bool generating = false;
  String? generatedMessage;

  Future<void> _generateAIMessage() async {
    setState(() => generating = true);
    final msg = await ApiService.generateMessage(
      lead: widget.lead,
      context: 'Cold outreach for B2B SaaS product',
      tone: 'Professional',
    );
    if (mounted) setState(() { generatedMessage = msg; generating = false; });
  }

  void _openWhatsApp() async {
    final phone = widget.lead['phone']?.toString().replaceAll(RegExp(r'[^0-9]'), '') ?? '';
    final msg = generatedMessage ?? 'Hi there! I came across your business and would love to connect.';
    final url = 'https://wa.me/$phone?text=${Uri.encodeComponent(msg)}';
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    }
  }

  void _openDialer() async {
    final phone = widget.lead['phone'] ?? '';
    final url = 'tel:$phone';
    if (await canLaunchUrl(Uri.parse(url))) await launchUrl(Uri.parse(url));
  }

  void _openEmail() async {
    final email = widget.lead['email'] ?? '';
    final url = 'mailto:$email';
    if (await canLaunchUrl(Uri.parse(url))) await launchUrl(Uri.parse(url));
  }

  @override
  Widget build(BuildContext context) {
    final lead = widget.lead;
    final score = (lead['score'] as num?)?.toInt() ?? 85;

    return Scaffold(
      backgroundColor: const Color(0xFFF9FAFB),
      body: CustomScrollView(
        slivers: [
          // ── AppBar ──
          SliverAppBar(
            backgroundColor: const Color(0xFFF9FAFB),
            elevation: 0,
            leading: const BackButton(color: kBlack),
            title: Text('Lead Profile', style: kHeading(18)),
            actions: [
              IconButton(icon: const Icon(Icons.share, color: kBlack), onPressed: () {}),
              IconButton(icon: const Icon(Icons.more_vert, color: kBlack), onPressed: () {}),
            ],
          ),

          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 120),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [

                  // ── Hero Image ──
                  Stack(
                    alignment: Alignment.bottomLeft,
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(24),
                        child: Container(
                          height: 240, width: double.infinity,
                          color: Colors.grey.shade300,
                          child: Stack(
                            children: [
                              Center(child: Text(lead['img'] ?? '', style: kHeading(60, color: Colors.grey.shade400))),
                              Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.transparent, Colors.black.withOpacity(0.5)]))),
                            ],
                          ),
                        ),
                      ),
                      Positioned(
                        bottom: 16, right: 16,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(20)),
                          child: Text('VERIFIED', style: kHeading(13, weight: FontWeight.w900)),
                        ),
                      ),
                      Positioned(
                        bottom: 20, left: 16,
                        child: Row(
                          children: [
                            Container(width: 24, height: 4, decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(2))),
                            const SizedBox(width: 6),
                            Container(width: 4, height: 4, decoration: BoxDecoration(color: Colors.white.withOpacity(0.6), borderRadius: BorderRadius.circular(2))),
                            const SizedBox(width: 6),
                            Container(width: 4, height: 4, decoration: BoxDecoration(color: Colors.white.withOpacity(0.6), borderRadius: BorderRadius.circular(2))),
                          ],
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 24),

                  // ── Title Row ──
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(lead['name'] ?? '', style: kHeading(24, weight: FontWeight.w900)),
                            const SizedBox(height: 4),
                            Text(lead['type'] ?? '', style: kBody(15, weight: FontWeight.w600)),
                          ],
                        ),
                      ),
                      Container(
                        width: 56, height: 56,
                        decoration: const BoxDecoration(color: Color(0xFF4D7C4F), shape: BoxShape.circle),
                        child: Center(child: Text((lead['img'] ?? '??').substring(0, 1), style: kHeading(18, color: kWhite))),
                      ),
                    ],
                  ),

                  const SizedBox(height: 14),
                  Row(
                    children: [
                      const Icon(Icons.location_on, size: 16, color: kYellow),
                      const SizedBox(width: 4),
                      Text('${lead['distance'] ?? ''} • ${lead['location'] ?? ''}', style: kBody(13, weight: FontWeight.w600)),
                      const SizedBox(width: 14),
                      const Icon(Icons.circle, size: 12, color: kGreen),
                      const SizedBox(width: 4),
                      Text('Active 2h ago', style: kBody(13, color: kGreen, weight: FontWeight.w600)),
                    ],
                  ),

                  const SizedBox(height: 24),

                  // ── Success Probability ──
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(color: const Color(0xFFFFFDF0), border: Border.all(color: const Color(0xFFFEF5B3)), borderRadius: BorderRadius.circular(24)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('Success Probability', style: kBody(14, color: const Color(0xFF4B5563), weight: FontWeight.w800)),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(color: const Color(0xFFD1FAE5), borderRadius: BorderRadius.circular(12)),
                              child: Text('↗ +5.2%', style: kHeading(12, color: kGreen, weight: FontWeight.w900)),
                            ),
                          ],
                        ),
                        const SizedBox(height: 8),
                        Text('$score%', style: kHeading(42)),
                        const SizedBox(height: 14),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(4),
                          child: LinearProgressIndicator(
                            value: score / 100,
                            minHeight: 8,
                            backgroundColor: const Color(0xFFE5E7EB),
                            valueColor: const AlwaysStoppedAnimation<Color>(kYellow),
                          ),
                        ),
                        const SizedBox(height: 14),
                        Text('Based on 12 interactions and high inventory demand matching your portfolio.', style: kBody(12)),
                      ],
                    ),
                  ),

                  const SizedBox(height: 20),

                  // ── Dual Stats ──
                  Row(
                    children: [
                      Expanded(
                        child: AppCard(
                          border: Border.all(color: const Color(0xFFF3F4F6)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('LEAD SCORE', style: kBody(11, weight: FontWeight.w800)),
                              const SizedBox(height: 8),
                              Text('$score/100', style: kHeading(24)),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: AppCard(
                          border: Border.all(color: const Color(0xFFF3F4F6)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('POT. VALUE', style: kBody(11, weight: FontWeight.w800)),
                              const SizedBox(height: 8),
                              Text('₹50,000', style: kHeading(24)),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 28),
                  Text('QUICK ACTIONS', style: kBody(12, weight: FontWeight.w800)),
                  const SizedBox(height: 14),

                  // ── Action Buttons ──
                  Row(
                    children: [
                      Expanded(child: _actionBtn(Icons.chat, 'WHATSAPP', const Color(0xFFDCFCE7), const Color(0xFF16A34A), onTap: _openWhatsApp)),
                      const SizedBox(width: 14),
                      Expanded(child: _actionBtn(Icons.phone, 'CALL', const Color(0xFFDBEAFE), kBlue, onTap: _openDialer)),
                      const SizedBox(width: 14),
                      Expanded(child: _actionBtn(Icons.mail, 'EMAIL', const Color(0xFFF3E8FF), kPurple, onTap: _openEmail)),
                    ],
                  ),

                  const SizedBox(height: 32),

                  // ── AI Message Card ──
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(color: kBlack, borderRadius: BorderRadius.circular(24)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('AI Message Generator', style: kHeading(16, color: kWhite)),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                              decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(8)),
                              child: Text('GPT-4o', style: kHeading(11, weight: FontWeight.w900)),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        GestureDetector(
                          onTap: _generateAIMessage,
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(12)),
                            child: generating
                                ? const Center(child: SizedBox(width: 20, height: 20, child: CircularProgressIndicator(color: kBlack, strokeWidth: 2)))
                                : Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      const Icon(Icons.auto_fix_high, size: 18, color: kBlack),
                                      const SizedBox(width: 8),
                                      Text('Generate Perfect Pitch', style: kHeading(15, weight: FontWeight.w800)),
                                    ],
                                  ),
                          ),
                        ),
                        if (generatedMessage != null) ...[
                          const SizedBox(height: 16),
                          Container(
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(color: const Color(0xFF222222), border: Border.all(color: const Color(0xFF444444)), borderRadius: BorderRadius.circular(12)),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(generatedMessage!, style: kBody(14, color: kWhite)),
                                const SizedBox(height: 12),
                                Row(
                                  children: [
                                    Expanded(
                                      child: GestureDetector(
                                        onTap: _openWhatsApp,
                                        child: Container(
                                          padding: const EdgeInsets.symmetric(vertical: 10),
                                          decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(10)),
                                          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                                            const Icon(Icons.send, size: 14, color: kBlack),
                                            const SizedBox(width: 6),
                                            Text('Send Now', style: kHeading(14, weight: FontWeight.w800)),
                                          ]),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 10),
                                    Container(
                                      padding: const EdgeInsets.all(10),
                                      decoration: BoxDecoration(color: const Color(0xFF444444), borderRadius: BorderRadius.circular(10)),
                                      child: const Icon(Icons.copy, size: 16, color: kWhite),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),

      // ── Bottom CTA ──
      bottomNavigationBar: Container(
        padding: const EdgeInsets.fromLTRB(20, 16, 20, 36),
        decoration: const BoxDecoration(color: kWhite, border: Border(top: BorderSide(color: Color(0xFFF3F4F6)))),
        child: Row(
          children: [
            Expanded(
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFF9FAFB), foregroundColor: kBlack, elevation: 0, shape: const StadiumBorder(), padding: const EdgeInsets.symmetric(vertical: 16)),
                child: Text('Save Draft', style: kHeading(16, weight: FontWeight.w800)),
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              flex: 2,
              child: ElevatedButton.icon(
                onPressed: () {},
                icon: const Icon(Icons.chevron_right, color: kBlack),
                label: Text('Convert to Lead', style: kHeading(16, weight: FontWeight.w800)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: kYellow,
                  foregroundColor: kBlack,
                  elevation: 0,
                  shape: const StadiumBorder(),
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shadowColor: kYellow.withOpacity(0.35),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _actionBtn(IconData icon, String label, Color bg, Color iconColor, {VoidCallback? onTap}) {
    return GestureDetector(
      onTap: onTap,
      child: AppCard(
        border: Border.all(color: const Color(0xFFF3F4F6)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(width: 48, height: 48, decoration: BoxDecoration(color: bg, shape: BoxShape.circle), child: Icon(icon, color: iconColor, size: 24)),
            const SizedBox(height: 10),
            Text(label, style: kHeading(12, weight: FontWeight.w800)),
          ],
        ),
      ),
    );
  }
}
