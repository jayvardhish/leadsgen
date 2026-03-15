import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class PipelineScreen extends StatelessWidget {
  const PipelineScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kWhite,
      body: CustomScrollView(
        slivers: [
          // ── Top Bar ──
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 52, 20, 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Icon(Icons.arrow_back, size: 24),
                  Text('Pipeline Control', style: kHeading(18)),
                  const Icon(Icons.more_vert, size: 24),
                ],
              ),
            ),
          ),

          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 100),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [

                  // ── Total Processed Card ──
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(color: kYellow, borderRadius: BorderRadius.circular(24)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('TOTAL PROCESSED', style: kBody(12, color: kBlack, weight: FontWeight.w900)),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            Text('12.4k', style: kHeading(48, color: kBlack)),
                            const SizedBox(width: 12),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                              decoration: BoxDecoration(color: const Color(0xFFFFE600), borderRadius: BorderRadius.circular(16)),
                              child: Text('+12%', style: kHeading(14, weight: FontWeight.w900)),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),

                  const SizedBox(height: 16),

                  // ── Small Stats ──
                  Row(
                    children: [
                      Expanded(
                        child: AppCard(
                          color: const Color(0xFFFAFAFB),
                          border: Border.all(color: const Color(0xFFF3F4F6)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('Success Rate', style: kBody(12, weight: FontWeight.w700)),
                              const SizedBox(height: 8),
                              Text('98.2%', style: kHeading(24)),
                              const SizedBox(height: 12),
                              ClipRRect(
                                borderRadius: BorderRadius.circular(4),
                                child: const LinearProgressIndicator(value: 0.982, minHeight: 4, backgroundColor: Color(0xFFE5E7EB), valueColor: AlwaysStoppedAnimation<Color>(kYellow)),
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: AppCard(
                          color: const Color(0xFFFAFAFB),
                          border: Border.all(color: const Color(0xFFF3F4F6)),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('Active Leads', style: kBody(12, weight: FontWeight.w700)),
                              const SizedBox(height: 8),
                              Text('42', style: kHeading(24)),
                              const SizedBox(height: 12),
                              Text('↘ 2%', style: kBody(12, color: kRed, weight: FontWeight.w800)),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 32),

                  // ── Workflow Stream Header ──
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text('Workflow Stream', style: kHeading(18)),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                        decoration: BoxDecoration(color: const Color(0xFFD1FAE5), borderRadius: BorderRadius.circular(20)),
                        child: Row(
                          children: [
                            Container(width: 8, height: 8, decoration: const BoxDecoration(color: kGreen, shape: BoxShape.circle)),
                            const SizedBox(width: 6),
                            Text('Live', style: kHeading(14, color: kGreen, weight: FontWeight.w800)),
                          ],
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 24),

                  // ── Pipeline Steps ──
                  _pipelineStep(
                    icon: Icons.search,
                    iconBg: const Color(0xFFEFF6FF),
                    iconColor: kBlue,
                    title: 'Data Scraping',
                    subtitle: 'Targeting 5 high-intent sources',
                    step: 'STEP 01',
                    extra: Row(
                      children: [
                        _progressBar(kBlue, 1.0),
                        const SizedBox(width: 4),
                        _progressBar(kBlue, 1.0),
                        const SizedBox(width: 4),
                        _progressBar(const Color(0xFFDBEAFE), 1.0),
                      ],
                    ),
                    isLast: false,
                  ),
                  _pipelineStep(
                    icon: Icons.psychology,
                    iconBg: kYellow,
                    iconColor: kBlack,
                    title: 'AI Analysis',
                    subtitle: 'Processing Sentiment & Intent',
                    step: 'STEP 02',
                    extra: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                      decoration: BoxDecoration(color: const Color(0xFFF9FAFB), border: Border.all(color: const Color(0xFFF3F4F6)), borderRadius: BorderRadius.circular(16)),
                      child: Text('"Analyzing user behavior patterns..."', style: kBody(13, color: const Color(0xFF9CA3AF))),
                    ),
                    isLastActive: true,
                    isLast: false,
                  ),
                  _pipelineStep(
                    icon: Icons.auto_awesome,
                    iconBg: const Color(0xFFF3E8FF),
                    iconColor: kPurple,
                    title: 'Content Engine',
                    subtitle: 'GPT-4 Optimized messages',
                    step: 'STEP 03',
                    isLast: false,
                  ),
                  _pipelineStep(
                    icon: Icons.send,
                    iconBg: const Color(0xFFFFEDD5),
                    iconColor: const Color(0xFFEA580C),
                    title: 'Auto Delivery',
                    subtitle: 'Smart scheduling enabled',
                    step: 'STEP 04',
                    isLast: true,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _pipelineStep({
    required IconData icon,
    required Color iconBg,
    required Color iconColor,
    required String title,
    required String subtitle,
    required String step,
    Widget? extra,
    bool isLast = false,
    bool isLastActive = false,
  }) {
    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Column(
            children: [
              Container(
                width: 50, height: 50,
                decoration: BoxDecoration(color: iconBg, shape: BoxShape.circle, border: const Border.fromBorderSide(BorderSide(color: kWhite, width: 4))),
                child: Icon(icon, color: iconColor, size: 22),
              ),
              if (!isLast) Expanded(child: Container(width: 2, color: const Color(0xFFF3F4F6))),
            ],
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(bottom: 32),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 4),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(title, style: kHeading(16, weight: FontWeight.w900)),
                      Text(step, style: kBody(10, weight: FontWeight.w800)),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(subtitle, style: kBody(14, weight: FontWeight.w500)),
                  if (extra != null) ...[const SizedBox(height: 12), extra],
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  static Widget _progressBar(Color color, double value) => Container(
    width: 36, height: 4,
    decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(2)),
  );
}
