import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../services/api_service.dart';

class AILabScreen extends StatefulWidget {
  const AILabScreen({Key? key}) : super(key: key);

  @override
  State<AILabScreen> createState() => _AILabScreenState();
}

class _AILabScreenState extends State<AILabScreen> {
  String selectedTone = 'Professional';
  double creativity = 0.75;
  final TextEditingController _contextCtrl = TextEditingController();
  String previewMessage = "Hi [Name], I'm reaching out regarding the current project deadline. Unfortunately, we've encountered a slight delay in receiving the necessary client data. Would it be possible to extend the submission date to Friday? I want to ensure the final output is as accurate as possible. Thanks for understanding!";
  bool generating = false;

  final List<String> tones = ['Professional', 'Friendly', 'Witty', 'Urgent', 'Empathetic'];

  Future<void> _regenerate() async {
    setState(() => generating = true);
    final msg = await ApiService.generateMessage(
      lead: {'name': '[Name]', 'type': 'Business', 'location': 'your area'},
      context: _contextCtrl.text.isEmpty ? 'General outreach' : _contextCtrl.text,
      tone: selectedTone,
    );
    if (mounted) setState(() { previewMessage = msg; generating = false; });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9FA),
      body: Stack(
        children: [
          CustomScrollView(
            slivers: [
              // ── Top Bar ──
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 52, 20, 0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Icon(Icons.arrow_back, size: 24),
                      Text('AI Message Lab', style: kHeading(18)),
                      const Icon(Icons.more_horiz, size: 24),
                    ],
                  ),
                ),
              ),

              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 24, 20, 200),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [

                      // ── Context Input ──
                      Text("What's the context?", style: kBody(14, color: const Color(0xFF4B5563), weight: FontWeight.w800)),
                      const SizedBox(height: 12),
                      AppCard(
                        child: TextField(
                          controller: _contextCtrl,
                          maxLines: 4,
                          style: kBody(15, color: kBlack),
                          decoration: const InputDecoration(
                            hintText: 'e.g., Asking my boss for a deadline extension because the client data is delayed...',
                            border: InputBorder.none,
                            isDense: true,
                          ),
                        ),
                      ),

                      const SizedBox(height: 24),

                      // ── Tone Selection ──
                      Text('Select Tone', style: kBody(14, color: const Color(0xFF4B5563), weight: FontWeight.w800)),
                      const SizedBox(height: 12),
                      Wrap(
                        spacing: 10,
                        runSpacing: 10,
                        children: tones.map((tone) {
                          final isSelected = tone == selectedTone;
                          return GestureDetector(
                            onTap: () => setState(() => selectedTone = tone),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 200),
                              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                              decoration: BoxDecoration(
                                color: isSelected ? kYellow : kWhite,
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: isSelected ? kYellow : const Color(0xFFE5E7EB)),
                              ),
                              child: Text(tone, style: kBody(14, color: kBlack, weight: isSelected ? FontWeight.w800 : FontWeight.w600)),
                            ),
                          );
                        }).toList(),
                      ),

                      const SizedBox(height: 24),

                      // ── Creativity Slider ──
                      AppCard(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text('Creativity Level', style: kBody(14, color: const Color(0xFF4B5563), weight: FontWeight.w800)),
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                  decoration: BoxDecoration(color: const Color(0xFFFEF08A), borderRadius: BorderRadius.circular(6)),
                                  child: Text('${(creativity * 100).toInt()}%', style: kHeading(12, weight: FontWeight.w900)),
                                ),
                              ],
                            ),
                            SliderTheme(
                              data: SliderTheme.of(context).copyWith(
                                activeTrackColor: kYellow,
                                inactiveTrackColor: const Color(0xFFF3F4F6),
                                thumbColor: kYellow,
                                overlayColor: kYellow.withOpacity(0.2),
                                trackHeight: 8,
                                thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 10),
                              ),
                              child: Slider(
                                value: creativity,
                                onChanged: (v) => setState(() => creativity = v),
                              ),
                            ),
                          ],
                        ),
                      ),

                      const SizedBox(height: 24),

                      // ── Preview Draft ──
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('Preview Draft', style: kBody(14, color: const Color(0xFF4B5563), weight: FontWeight.w800)),
                          GestureDetector(
                            onTap: _regenerate,
                            child: Row(
                              children: [
                                const Icon(Icons.refresh, size: 14, color: kGrey),
                                const SizedBox(width: 4),
                                Text('Regenerate', style: kBody(12, weight: FontWeight.w700)),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      AppCard(
                        child: generating
                            ? const Center(child: Padding(padding: EdgeInsets.symmetric(vertical: 24), child: CircularProgressIndicator(color: kBlack)))
                            : Stack(
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.only(right: 36),
                                    child: Text(previewMessage, style: kBody(15, color: const Color(0xFF1F2937))),
                                  ),
                                  Positioned(
                                    top: 0, right: 0,
                                    child: Container(
                                      padding: const EdgeInsets.all(6),
                                      decoration: BoxDecoration(color: const Color(0xFFF3F4F6), borderRadius: BorderRadius.circular(8)),
                                      child: const Icon(Icons.copy, size: 16, color: kGrey),
                                    ),
                                  ),
                                ],
                              ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),

          // ── Floating WhatsApp Button ──
          Positioned(
            bottom: 84,
            left: 20,
            right: 20,
            child: GestureDetector(
              onTap: () {},
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 18),
                decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(24), boxShadow: [BoxShadow(color: kYellow.withOpacity(0.35), blurRadius: 24, offset: const Offset(0, 8))]),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(width: 32, height: 32, decoration: const BoxDecoration(color: kBlack, shape: BoxShape.circle), child: const Icon(Icons.send, color: kYellow, size: 14)),
                        const SizedBox(width: 12),
                        Text('Send to WhatsApp', style: kHeading(16, weight: FontWeight.w900)),
                      ],
                    ),
                    const Icon(Icons.chevron_right, color: kBlack, size: 22),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
